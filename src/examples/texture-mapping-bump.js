import * as THREE from 'three'
import { scene, camera, gui, renderer, renderLoop } from '../setup'
import ThreePointLighting from '../helpers/ThreePointLighting'

new ThreePointLighting({
  ambientLightColor: 0x999999
})

camera.position.set(0, 0, 25)

let texLoader = new THREE.TextureLoader()
let rocksTexture = texLoader.load('../textures/rocks.jpg')

let matWithBump = new THREE.MeshPhongMaterial({
  map: rocksTexture,
  bumpMap: rocksTexture,
  bumpScale: 0.3,
  anisotropy: 16
})

let matWithoutBump = new THREE.MeshPhongMaterial({
  map: texLoader.load('../textures/rocks.jpg'),
})

let meshWithBump = new THREE.Mesh(new THREE.BoxBufferGeometry(150,10,150), matWithBump)
meshWithBump.position.y = -15
scene.add(meshWithBump)

let meshWithoutBump = new THREE.Mesh(new THREE.BoxBufferGeometry(150,10,150), matWithoutBump)
meshWithoutBump.position.y = 15
scene.add(meshWithoutBump)

/*** GUI ***/
gui.add(matWithBump, 'bumpScale').min(0).max(0.8)
gui.add(rocksTexture, 'anisotropy').min(1).max(renderer.getMaxAnisotropy()).step(1).onChange(function() {
  rocksTexture.needsUpdate = true
})

renderLoop(() => {
  meshWithBump.rotation.y += 0.001
})
