import * as THREE from 'three'
import { scene, renderLoop } from '../setup'
import OBJLoader from '../loaders/OBJLoader'
import ThreePointLighting from '../helpers/ThreePointLighting'
import Room from '../helpers/Room'

let room = new Room()

let lights = new ThreePointLighting({
  keyLightColor: '#5a00ff',
  fillLightColor: '#fced00',
  ambientLightColor: '#080908',
  intensity: 1.5,
  distance: 120
})
lights.createHelpers()
lights.castShadow()

let objLoader = new THREE.OBJLoader()
objLoader.load('../../models/Cerberus.obj', group => {
  let texLoader = new THREE.TextureLoader()

  let mat = new THREE.MeshStandardMaterial({
    roughness: .8,
    metalness: 1,
    map: texLoader.load('../../models/Cerberus_A.jpg'),
    roughnessMap: texLoader.load('../../models/Cerberus_R.jpg'),
    metalnessMap: texLoader.load('../../models/Cerberus_M.jpg'),
    normalMap: texLoader.load('../../models/Cerberus_N.jpg'),
  })

  group.traverse(child => {
    if(child instanceof THREE.Mesh) {
      child.material = mat
      child.scale.set(30,30,30)
      child.castShadow = true
    }
  })

  group.rotation.y = -Math.PI/2
  scene.add(group)
})

renderLoop(() => {
})
