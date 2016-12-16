import * as THREE from 'three'
import TrackballControls from './controls/TrackballControls'
import Stats from 'stats.js'
import dat from 'dat-gui'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
camera.position.set(0, 0, 40)
camera.lookAt(scene.position)

let mouse = new THREE.Vector2()

let gui = new dat.gui.GUI()

scene.add(new THREE.AxisHelper(20))

let stats = new Stats()
document.body.appendChild(stats.dom)

let renderer = createRenderer(true)

function createRenderer(shadowsEnabled = true) {
  let r = new THREE.WebGLRenderer()
  r.setSize(window.innerWidth, window.innerHeight)
  r.setPixelRatio(window.devicePixelRatio)
  if(shadowsEnabled)
    r.shadowMap.enabled = true
  document.body.appendChild(r.domElement)
  return r
}

function renderLoop(customAnimation) {
  let animate = customAnimation;

  (function render() {
    requestAnimationFrame(render)
    animate()

    controls.update()
    stats.update()
    renderer.render(scene, camera)
  })()
}

const controls = new TrackballControls(camera, renderer.domElement) // s to zoom, d to pan
controls.maxDistance = 200;

window.addEventListener('resize', function onWindowResized(e) {
  renderer.setSize(window.innerWidth, window.innerHeight)
	camera.aspect = window.innerWidth/window.innerHeight
	camera.updateProjectionMatrix()
})

window.addEventListener('mousemove', function onMouseMove(e) {
  // calculate mouse position in normalized device coordinates
  // (-1 to +1) for both components
  mouse.x = (e.clientX/window.innerWidth)*2 - 1
  mouse.y = -(e.clientY/window.innerHeight)*2 + 1
})

export {
  scene,
  camera,
  controls,
  mouse,
  renderer,
  renderLoop,
  gui
}
