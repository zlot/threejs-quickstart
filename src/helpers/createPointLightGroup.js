import { Object3D } from 'three'
import { scene } from '../setup'
import randomColor from 'random-color'

export default function({
  showSphere = true,
  intensity = .75,
  distance = 80,
  castShadow = false,
  shadowMapMultiplier = 1
} = {}) {

  let color = randomColor(0.99,0.99).hexString()
  let light = new THREE.PointLight(color, intensity, distance)
  light.castShadow = castShadow
  light.shadow.mapSize.width *= shadowMapMultiplier
  light.shadow.mapSize.height *= shadowMapMultiplier

  let sphere = showSphere ? new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 8, 8),
    new THREE.MeshBasicMaterial({
      color
    })
  ) : null

  let group = new Object3D()
  group.add(light)
  if(showSphere) group.add(sphere)
  scene.add(group)
  return group
}
