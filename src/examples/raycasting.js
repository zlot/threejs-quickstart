import * as THREE from 'three'
import { init, scene, camera, renderLoop } from '../setup'
import RaycasterHelper from '../helpers/RaycasterHelper'

init()

let cubes = []
function createCube(color) {
  let cube = new THREE.Mesh(
    new THREE.BoxBufferGeometry(10, 10, 10),
    new THREE.MeshBasicMaterial({
      color: color
    })
  )
  cubes.push(cube)
  scene.add(cube)
  return cube
}

const COLOR = {
  UNSELECTED: 0x0000ff,
  SELECTED: 0xff0000
}
createCube(COLOR.UNSELECTED).position.x = -10
createCube(COLOR.UNSELECTED).position.x = 10
createCube(COLOR.UNSELECTED).position.y = 10
createCube(COLOR.UNSELECTED).position.y = -10


let raycasterHelper = new RaycasterHelper(cubes)

raycasterHelper.addEventListener('newIntersection', data => {
  data.object.material.color.set(COLOR.SELECTED)
  // Note that previousObject may be null!
  if(data.previousObject) {
    data.previousObject.material.color.set(COLOR.UNSELECTED)
  }
  console.log('%c new intersection', 'color: red')
})

raycasterHelper.addEventListener('zeroIntersects', data => {
  // Note that previousObject may be null!
  if(data.previousObject) {
    data.previousObject.material.color.set(COLOR.UNSELECTED)
  }
  console.log('%c zeroIntersects', 'color: blue')
})


renderLoop(() => {
  raycasterHelper.checkForIntersects()
})
