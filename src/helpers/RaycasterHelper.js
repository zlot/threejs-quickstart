import { Raycaster, EventDispatcher } from 'three'
import { scene, camera, mouse } from '../setup'

/*
 * Dispatches two events: newIntersection and zeroIntersects.
 * newIntersection is passed object and previousObject.
 * zeroIntersects is passed only previousObject.
 * Note that for both events, previousObject could be null! So make sure to check.
 */
export default class RaycasterHelper {

  constructor(objectsToCheck = scene.children) {
    this.raycaster = new Raycaster()
    this.objectsToCheck = objectsToCheck

    this.selected = null
    this.noFurtherIntersects = true
  }

  checkForIntersects() {
    this.raycaster.setFromCamera(mouse, camera)
    let intersects = this.raycaster.intersectObjects(this.objectsToCheck)

    if(intersects.length > 0) {
      // if we're intersecting a new object
      if(this.selected != intersects[0].object) {
        this.dispatchEvent({
          type: 'newIntersection',
          object: intersects[0].object,
          previousObject: this.selected
        })
        this.selected = intersects[0].object
      }
    } else {
      if(this.selected) {
        this.dispatchEvent({
          type: 'zeroIntersects',
          previousObject: this.selected
        })
      }
      this.selected = null
    }
  }
}

// Give RaycasterHelper EventDispatcher abilities
Object.assign(RaycasterHelper.prototype, EventDispatcher.prototype)
