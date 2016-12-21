import * as THREE from 'three'
import TrackballControls from './controls/TrackballControls'
import Stats from 'stats.js'
import dat from 'dat-gui'

let scene, camera, controls, mouse, renderer, renderLoop, gui
let Physijs

function init({
  physics = false,
  shadowsEnabled = true
} = {}) {

  if(physics) {
    Physijs = require('physijs/dist/physi.js')
    scene = new Physijs.Scene(__dirname + '/examples/physijs/physijs-worker.js', {
      gravity: {x: 0, y: -9.8, z: 0}
    })
  } else {
    scene = new THREE.Scene()
  }

  camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
  camera.position.set(0, 0, 40)
  camera.lookAt(scene.position)

  mouse = new THREE.Vector2()

  gui = new dat.gui.GUI()

  scene.add(new THREE.AxisHelper(20))

  const stats = new Stats()
  document.body.appendChild(stats.dom)

  renderer = createRenderer()

  function createRenderer() {
    let r = new THREE.WebGLRenderer()
    r.setSize(window.innerWidth, window.innerHeight)
    r.setPixelRatio(window.devicePixelRatio)
    if(shadowsEnabled)
      r.shadowMap.enabled = true
    document.body.appendChild(r.domElement)
    return r
  }

  renderLoop = customAnimation => {
    let animate = customAnimation
    let physics_framerate = 1000/60

    if(physics) {
      function stepPhysics() {
        scene.step(physics_framerate/1000, undefined, render)
      }
      function render() {
        requestAnimationFrame(stepPhysics)
        animate()
        controls.update()
        stats.update()
        renderer.render(scene, camera)
      }
      stepPhysics()

    } else {
      (function render() {
        requestAnimationFrame(render)
        animate()
        controls.update()
        stats.update()
        renderer.render(scene, camera)
      })()
    }
  }

  controls = new TrackballControls(camera, renderer.domElement) // s to zoom, d to pan
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
}



export {
  init,
  THREE,
  scene,
  camera,
  controls,
  mouse,
  renderer,
  renderLoop,
  gui,
  Physijs
}
