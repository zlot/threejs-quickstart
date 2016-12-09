import { WebGLRenderer, CanvasRenderer } from 'three'
import eventHub from './eventHub'

export default function createRenderer(type = 'WebGL', scene, camera, enableShadows = true) {

  let renderer

  switch(type.toLowerCase()) {
    case 'webgl':
      renderer = new WebGLRenderer()
      break
    case 'canvas':
      renderer = new CanvasRenderer()
      break
  }

  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio)

  if(enableShadows) {
    renderer.shadowMap.enabled = true
  }

  document.body.appendChild(renderer.domElement)

  function render() {
    requestAnimationFrame(render)

    eventHub.dispatchEvent({type: 'render'})

    renderer.render(scene, camera)
  }

  render()

  return renderer
}
