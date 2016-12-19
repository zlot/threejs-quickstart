import { scene, camera, renderLoop, Physijs } from './setup-physijs'
import _ from 'lodash'
import randomColor from 'random-color'

camera.position.y = 20

let boxes = []

let boxFactory = () => {
  let box = new Physijs.Box(
    new THREE.BoxGeometry(_.random(3,8), _.random(3,8), _.random(3,8)),
    new THREE.MeshBasicMaterial({color: randomColor(0.89,0.99).hexString()}),
    { mass: 1, restitution: 0.7 }
  )
  box.position.set(_.random(-20, 20), _.random(20), _.random(-20, 20))
  scene.add(box)
}

_.times(40, boxFactory)


let floor = new Physijs.Box(
  new THREE.BoxGeometry(100, 1, 100),
  new THREE.MeshBasicMaterial({color: 'grey'}),
  { restitution: 0.4 }
)
floor.position.y = -10
scene.add(floor);

document.addEventListener('click', boxFactory)

renderLoop(() => {
  let time = performance.now()*0.001
})
