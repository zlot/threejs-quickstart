import { AmbientLight, DirectionalLight } from 'three'
import { scene } from '../setup'
export default class ThreePointLighting {

  constructor({
    ambientLightColor = 0x404040,
    keyLightColor = 0xffffff,
    fillLightColor = 0xffffff,
    intensity = .75,
    distance = 80,
    decay = 1
  } = {}) {

    this.ambientLight = new AmbientLight(ambientLightColor)
    scene.add(this.ambientLight)

    this.keyLight = new THREE.PointLight(keyLightColor, intensity, distance, decay)
    this.keyLight.position.set(-15, 10, 20)
    scene.add(this.keyLight)

    this.fillLight = new THREE.PointLight(fillLightColor, this.keyLight.intensity/2, distance, decay)
    this.fillLight.position.set(-this.keyLight.position.x, 10, 20)
    scene.add(this.fillLight)

    this.createHelpers = () => {
      scene.add(new THREE.PointLightHelper(this.keyLight, 1))
      scene.add(new THREE.PointLightHelper(this.fillLight, 1))
    }
  }

  castShadow() {
    this.keyLight.castShadow = true
    this.fillLight.castShadow = true
  }

  /* Run only when shadow maps are ready */
  increaseShadowResolutionBy2x() {
    this._updateShadowMapsByScalar(2)
  }
  /* Run only when shadow maps are ready */
  decreaseShadowResolutionBy2x() {
    this._updateShadowMapsByScalar(0.5)
  }

  _updateShadowMapsByScalar(s) {
    if(!this.keyLight.shadow.map || !this.fillLight.shadow.map) {
      console.warn('shadow maps for key or fill lights are not ready yet!')
      return
    }
    this.keyLight.shadow.mapSize.width *= s
    this.keyLight.shadow.mapSize.height *= s
    this.fillLight.shadow.mapSize.width *= s
    this.fillLight.shadow.mapSize.height *= s
    //required for shadowMap to update: see http://stackoverflow.com/questions/23478250/how-to-update-shadowmap-size-of-light-in-three-js
    this.keyLight.shadow.map.dispose()
    this.keyLight.shadow.map = null
    this.fillLight.shadow.map.dispose()
    this.fillLight.shadow.map = null
  }
}
