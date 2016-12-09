import * as THREE from 'three'
import { scene, camera, controls, renderLoop } from './setup'
import ThreePointLighting from './helpers/ThreePointLighting'
import Room from './helpers/Room'

let room = new Room(scene)
let lights = new ThreePointLighting(scene)
lights.createHelpers()
lights.castShadow()

let cube = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10),
  new THREE.MeshLambertMaterial({color: 0xffffff})
)
cube.castShadow = true
scene.add(cube)

renderLoop(() => {
  let time = performance.now()*0.001

  cube.rotation.y += 0.004
  lights.keyLight.position.x = 10*Math.cos(time)
  lights.keyLight.position.z = 10*Math.sin(time)
  lights.fillLight.position.y = 10*Math.cos(time)
  lights.fillLight.position.z = 10*Math.sin(time)
})
