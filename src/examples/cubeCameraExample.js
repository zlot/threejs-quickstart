import * as THREE from 'three'
import { scene, gui, renderer, renderLoop } from '../setup'
import ThreePointLighting from '../helpers/ThreePointLighting'

let lightColors = {
  keyLightColor: '#5a00ff',
  fillLightColor: '#fced00',
  ambientLightColor: '#080908'
}
let lights = new ThreePointLighting(lightColors)
lights.createHelpers()

/*** Skybox ***/
let skybox = new THREE.CubeTextureLoader()
  .setPath('../../textures/skybox/')
  .load(['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg'])
skybox.mapping = THREE.CubeReflectionMapping // THREE.CubeReflectionMapping
scene.background = skybox

/*** cube camera ***/
let cubeCamera = new THREE.CubeCamera(1, 1000, 128)
scene.add(cubeCamera)

let cubes = []

let createCube = () => {
  let cube = new THREE.Mesh(new THREE.BoxGeometry(5, 5, 5), new THREE.MeshNormalMaterial())
  cubes.push(cube)
  scene.add(cube)
}
createCube()
createCube()
createCube()

let createSphere = () => {
  let geo = new THREE.SphereGeometry(6, 64, 32)
  let mat = new THREE.MeshStandardMaterial({
    roughness: 0.2,
    metalness: 1,
    envMap: cubeCamera.renderTarget
  })
  return new THREE.Mesh(geo, mat)
}

let sphere = createSphere()
scene.add(sphere)

renderLoop(() => {
  let time = performance.now()*0.001

  for(let i=0; i<cubes.length; i++) {
    let offset = (i+1)/cubes.length * Math.PI*2
    cubes[i].position.x = 15*Math.cos(time + offset)
    cubes[i].position.z = 15*Math.sin(time + offset)
  }

  // hide sphere, otherwise the cubemap texture can't see through it!
  sphere.visible = false
	cubeCamera.updateCubeMap(renderer, scene)
  sphere.visible = true

})
