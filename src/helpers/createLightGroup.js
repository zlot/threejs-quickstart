import { Object3D } from 'three'
import { scene } from '../setup'
import randomColor from 'random-color'

export default function(showSphere) {
  let color = randomColor(0.99,0.99).hexString()
  let l = new THREE.PointLight(color, .75, 80)

  let sphere = showSphere ? new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 8, 8),
    new THREE.MeshBasicMaterial({
      color
    })
  ) : null
  let group = new Object3D()
  group.add(l)
  if(showSphere) group.add(sphere)
  scene.add(group)
  return group
}
