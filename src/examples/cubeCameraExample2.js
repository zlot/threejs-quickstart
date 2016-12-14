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
  .setPath('../../textures/swedish_royal_castle/')
  .load(['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg'])
skybox.mapping = THREE.CubeReflectionMapping
window.s = skybox
scene.background = skybox

/*** cube camera ***/
let cubeCamera = new THREE.CubeCamera(1, 1000, 1024)
let cubeCamera2 = new THREE.CubeCamera(1, 1000, 1024)

let cube = new THREE.Mesh(new THREE.BoxGeometry(5, 50, 20), new THREE.MeshBasicMaterial({
  envMap: cubeCamera.renderTarget.texture
}))
scene.add(cube)
cube.add(cubeCamera)


let cube2 = new THREE.Mesh(new THREE.BoxGeometry(5, 50,50), new THREE.MeshBasicMaterial({
  envMap: cubeCamera2.renderTarget.texture
}))
cube2.rotation.y = Math.PI/2
cube2.position.set(30, 0, 30)
cubeCamera2.rotation.y = -Math.PI/2

scene.add(cube2)
cube2.add(cubeCamera2)

let normalCube = new THREE.Mesh(new THREE.BoxGeometry(25, 25, 25), new THREE.MeshNormalMaterial())
normalCube.position.x = 55
scene.add(normalCube)

window.r = cubeCamera.rotation
renderLoop(() => {
  let time = performance.now()*0.001

  cube.position.z = 10*Math.sin(time/2)
  normalCube.rotation.y = time

  normalCube.position.z = Math.sin(time) * 25 - 60


  // hide cube, otherwise the cubemap texture can't see through it!
  cube.visible = false
	cubeCamera.updateCubeMap(renderer, scene)
  cube.visible = true

  cube2.visible = false
	cubeCamera2.updateCubeMap(renderer, scene)
  cube2.visible = true


})
