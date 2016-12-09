import * as THREE from 'three'
import OrbitControls from './controls/orbit-controls'
import TrackballControls from './controls/TrackballControls'

import ThreePointLighting from './helpers/ThreePointLighting'
const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const controls = new OrbitControls(camera)

renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true
document.body.appendChild(renderer.domElement)

camera.position.set(0, 0, 20)
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

let render = () => {
  requestAnimationFrame(render)
  
  cube.rotation.y += 0.004

  controls.update()
  renderer.render(scene, camera)
}

render()
