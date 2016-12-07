import * as THREE from 'three'
import OrbitControls from './controls/orbit-controls'
import TrackballControls from './controls/TrackballControls'

const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const controls = new OrbitControls(camera)

renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

camera.position.set(0.5, 1, 4)
camera.lookAt(scene.position)

let cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({color: 0xffffff})
)

scene.add(cube)

let lights = new ThreePointLighting(scene)
lights.createHelpers()

let render = () => {
  requestAnimationFrame(render)
  cube.rotation.y += 0.004
  renderer.render(scene, camera)
}

render()
