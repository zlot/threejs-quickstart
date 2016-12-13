import * as THREE from 'three'
import { scene, renderLoop } from '../setup'
import OBJLoader from '../loaders/OBJLoader'
import ThreePointLighting from '../helpers/ThreePointLighting'
import Room from '../helpers/Room'

var ambient = new THREE.AmbientLight(0xffffff)
scene.add(ambient)
var pointLight = new THREE.PointLight(0xffffff, 2)
scene.add(pointLight)

let skybox = new THREE.CubeTextureLoader()
  .setPath('../../textures/skybox/')
  .load(['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg'])

skybox.mapping = THREE.CubeRefractionMapping

scene.background = skybox


let objLoader = new THREE.OBJLoader()
objLoader.load('../../models/Cerberus.obj', group => {
  let texLoader = new THREE.TextureLoader()

  let mat = new THREE.MeshStandardMaterial({
    roughness: 1,
    metalness: 1,
    map: texLoader.load('../../models/Cerberus_A.jpg'),
    roughnessMap: texLoader.load('../../models/Cerberus_R.jpg'),
    metalnessMap: texLoader.load('../../models/Cerberus_M.jpg'),
    normalMap: texLoader.load('../../models/Cerberus_N.jpg'),
    envMap: skybox
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

objLoader.load('../../models/Cerberus.obj', group => {
  let texLoader = new THREE.TextureLoader()

  let mat = new THREE.MeshLambertMaterial({
    envMap: skybox,
    refractionRatio: 0.95
  })

  group.traverse(child => {
    if(child instanceof THREE.Mesh) {
      child.material = mat
      child.scale.set(140,140,140)
    }
  })

  group.rotation.y = -Math.PI/2
  group.position.y = 40
  scene.add(group)
})


renderLoop(() => {
})
