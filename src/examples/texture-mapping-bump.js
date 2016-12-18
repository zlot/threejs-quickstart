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

let mesh = new THREE.Mesh(new THREE.BoxBufferGeometry(10,10,10), matWithBump)
mesh.position.x = -10
scene.add(mesh)

mesh = new THREE.Mesh(new THREE.BoxBufferGeometry(10,10,10), matWithoutBump)
mesh.position.x = 10
scene.add(mesh)

renderLoop(() => {
  // mesh.rotation.y += 0.001
})
