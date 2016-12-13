import * as THREE from 'three'
import { scene, camera, gui, renderLoop } from '../setup'
import OBJLoader from '../loaders/OBJLoader'
import ThreePointLighting from '../helpers/ThreePointLighting'
import Room from '../helpers/Room'

camera.position.z += 130

/*** Lights ***/
scene.add(new THREE.AmbientLight(0xffffff))
scene.add(new THREE.PointLight(0xffffff, 2))

/*** Skybox ***/
let skybox = new THREE.CubeTextureLoader()
  .setPath('../../textures/skybox/')
  .load(['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg'])

skybox.mapping = THREE.CubeRefractionMapping // THREE.CubeReflectionMapping
scene.background = skybox

let objLoader = new THREE.OBJLoader()

objLoader.load('../../models/Cerberus.obj', group => {
  let texLoader = new THREE.TextureLoader()

  let matWithEnvMap = new THREE.MeshLambertMaterial({
      envMap: skybox,
      refractionRatio: 0.95
  })

  let matWithTexture = new THREE.MeshStandardMaterial({
    roughness: .8,
    metalness: 1,
    map: texLoader.load('../../models/Cerberus_A.jpg'),
    roughnessMap: texLoader.load('../../models/Cerberus_R.jpg'),
    metalnessMap: texLoader.load('../../models/Cerberus_M.jpg'),
    normalMap: texLoader.load('../../models/Cerberus_N.jpg'),
  })

  let mesh

  group.traverse(child => {
    if(child instanceof THREE.Mesh) {
      child.material = matWithEnvMap
      child.scale.set(140,140,140)
      mesh = child
    }
  })
  scene.add(group)

  /*** GUI ***/
  let changeSkyboxMapping = {
    reflection() {
      mesh.material = matWithEnvMap
      skybox.mapping = THREE.CubeReflectionMapping
      matWithEnvMap.needsUpdate = true
    },
    refraction() {
      mesh.material = matWithEnvMap
      skybox.mapping = THREE.CubeRefractionMapping
      matWithEnvMap.needsUpdate = true
    },
    texture() {
      mesh.material = matWithTexture
    }
  }

  gui.add(changeSkyboxMapping, 'reflection')
  gui.add(changeSkyboxMapping, 'refraction')
  gui.add(changeSkyboxMapping, 'texture')

  renderLoop(() => {
    group.rotation.y += 0.01
  })

})
