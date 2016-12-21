
import { init, THREE, scene, camera, renderLoop } from '../setup'
import Ground from '../helpers/Ground'
import createPointLightGroup from '../helpers/createPointLightGroup'
import _ from 'lodash'

init({
  shadowsEnabled: true
})

camera.position.set(0, 30, 50)

new Ground({
  receiveShadow: true,
  y: -10
})

let lights = new Array(2)
_.times(lights.length, i => {
  lights[i] = createPointLightGroup({
    castShadow: true,
    distance: 400,
    shadowMapMultiplier: 8 // effects shadow quality
  })
})

_.times(20, () => {
  let mesh = new THREE.Mesh(
    new THREE.TetrahedronGeometry(4, 1),
    new THREE.MeshPhongMaterial({
      color: 0xffffff,
      emissive: 0x1e1e1e,
      specular: 0x0033ff,
      shininess: 15
    })
  )
  mesh.position.set(_.random(-40, 40), _.random(-10, 0), _.random(-40, 40))
  mesh.castShadow = true
  mesh.receiveShadow = true
  scene.add(mesh)
})


renderLoop(() => {
  let time = performance.now() * 0.001

  lights[0].position.x = 10 * Math.cos(time)
  lights[0].position.y = 5 * Math.sin(time) + 5
  lights[0].position.z = 5 * Math.tan(time*0.3)

  lights[1].position.x = 10 * Math.cos(time)
  lights[1].position.y = 5 * Math.sin(time) + 5
  lights[1].position.z = 15 * Math.tan(time+Math.PI*0.3)
})
