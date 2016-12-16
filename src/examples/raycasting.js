import * as THREE from 'three'
import { scene, camera, renderLoop } from '../setup'

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
  SELECTED: 0x00ff00
}

let cube1 = createCube(COLOR.UNSELECTED)
cube1.position.x = -10
let cube2 = createCube(COLOR.UNSELECTED)
cube2.position.x = 10


let mouse = new THREE.Vector2()

let raycaster = new THREE.Raycaster()
// renderer.sortObjects = false?

let INTERSECTED = false
window.addEventListener( 'mousemove', onMouseMove);

renderLoop(() => {

  raycaster.setFromCamera(mouse, camera)
  let intersects = raycaster.intersectObjects(cubes)
  //
  if(intersects.length > 0) {
  //   // if currently intersected is not the first intersected object found
  //   // aka if we're intersecting a new object
    if(INTERSECTED != intersects[0].object) {

      if(INTERSECTED) {
        INTERSECTED.material.color.set(COLOR.UNSELECTED)
      }

      INTERSECTED = intersects[0].object
      INTERSECTED.material.color.set(COLOR.SELECTED)
    }
  } else {
    if(INTERSECTED) {
      INTERSECTED.material.color.set(COLOR.UNSELECTED)
      INTERSECTED = null
    }
  }

})


function onMouseMove( event ) {

	// calculate mouse position in normalized device coordinates
	// (-1 to +1) for both components
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

}
