import * as THREE from 'three'
import TrackballControls from './controls/TrackballControls'
import stats from './helpers/displayStats'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
camera.position.set(0, 0, 40)
camera.lookAt(scene.position)

const controls = new TrackballControls(camera)

scene.add(new THREE.AxisHelper(20))

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

export {
  scene,
  camera,
  controls,
  renderLoop
}
