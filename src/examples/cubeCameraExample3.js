import * as THREE from 'three'
import { scene, gui, renderer, renderLoop } from '../setup'

/*** Skybox ***/
let skybox = new THREE.CubeTextureLoader()
  .setPath('../../textures/skybox/')
  .load(['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg'])
skybox.mapping = THREE.CubeReflectionMapping // THREE.CubeReflectionMapping
scene.background = skybox

let cubes = []

let createCubeWithCubeCamera = () => {
  let cubeCamera = new THREE.CubeCamera(1, 1000, 1024)
  let cube = new THREE.Mesh(new THREE.BoxBufferGeometry(5, 15, 5), new THREE.MeshStandardMaterial({
    roughness: .2,
    metalness: 1,
    envMap: cubeCamera.renderTarget.texture
  }))
  cube.userData.cubeCamera = cubeCamera
  cubes.push(cube)
  cube.add(cubeCamera) // notice we add the cubeCamera to the cube itself, so it follows its position
  scene.add(cube)
  return cube
}
createCubeWithCubeCamera()
createCubeWithCubeCamera()
createCubeWithCubeCamera()
createCubeWithCubeCamera()
createCubeWithCubeCamera()

let createSphereWithCubeCamera = () => {
  let cubeCamera = new THREE.CubeCamera(1, 1000, 1024)
  let sphere = new THREE.Mesh(new THREE.SphereBufferGeometry(6, 64, 32), new THREE.MeshStandardMaterial({
    roughness: 0.2,
    metalness: 1,
    envMap: cubeCamera.renderTarget.texture
  }))
  sphere.userData.cubeCamera = cubeCamera
  sphere.add(cubeCamera)
  scene.add(sphere)
  return sphere
}

let sphere = createSphereWithCubeCamera()

renderLoop(() => {
  let time = performance.now()*0.001

  for(let i=0; i<cubes.length; i++) {
    let offset = (i+1)/cubes.length * Math.PI*2
    cubes[i].position.x = 15*Math.cos(time + offset)
    cubes[i].position.y = 4*Math.cos((time + offset)*(i*0.5))
    cubes[i].position.z = 15*Math.sin(time + offset)
  }

  // hide sphere, otherwise the cubemap texture can't see through it!
  sphere.visible = false
	sphere.userData.cubeCamera.updateCubeMap(renderer, scene)
  sphere.visible = true

  cubes.forEach(cube => {
    cube.visible = false
    cube.userData.cubeCamera.updateCubeMap(renderer, scene)
    cube.visible = true
  })


})
