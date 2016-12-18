import * as THREE from 'three'
import { scene, gui, renderLoop } from '../setup'
import ThreePointLighting from '../helpers/ThreePointLighting'

new ThreePointLighting({
  ambientLightColor: 0x999999
})

let texLoader = new THREE.TextureLoader()

let matWithBump = new THREE.MeshPhongMaterial({
  map: texLoader.load('../textures/rocks.jpg'),
  bumpMap: texLoader.load('../textures/rocks.jpg'),
  bumpScale: 0.6,
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


renderLoop(() => {
  // mesh.rotation.y += 0.001
})
