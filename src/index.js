import * as THREE from 'three'
import TrackballControls from './controls/TrackballControls'

import createRenderer from './helpers/createRenderer'
import eventHub  from './helpers/eventHub'
import displayStats from './helpers/displayStats'

import ThreePointLighting from './helpers/ThreePointLighting'
import Room from './helpers/Room'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const controls = new TrackballControls(camera)

camera.position.set(0, 0, 40)
camera.lookAt(scene.position)

let cube = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10),
  new THREE.MeshLambertMaterial({color: 0xffffff})
)
cube.castShadow = true
scene.add(cube)

let axisHelper = new THREE.AxisHelper(20)
scene.add(axisHelper)

let lights = new ThreePointLighting(scene)
lights.createHelpers()
lights.castShadow()

let room = new Room(scene)

createRenderer('WebGL', scene, camera)

eventHub.addEventListener('render', () => {
  let time = performance.now()*0.001

  cube.rotation.y += 0.004
  lights.keyLight.position.x = 10*Math.cos(time)
  lights.keyLight.position.z = 10*Math.sin(time)
  controls.update()

})
