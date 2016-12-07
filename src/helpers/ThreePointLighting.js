import { AmbientLight, DirectionalLight } from 'three'

export default class ThreePointLighting {

  constructor(scene) {
    if(!scene)
      throw new Error('Please provide a scene to ThreePointLighting constructor.')

    this.ambientLight = new AmbientLight(0x404040)
    scene.add(this.ambientLight)

    this.keyLight = new THREE.PointLight(0xffffff, .75, 80)
    this.keyLight.position.set(-15, 10, 20)
    scene.add(this.keyLight)

    this.fillLight = new THREE.PointLight(0xffffff, this.keyLight.intensity/2, 80)
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

  increaseShadowResolutionBy2x() {
    this._updateShadowMapsByScalar(2)
  }

  decreaseShadowResolutionBy2x() {
    this._updateShadowMapsByScalar(0.5)
  }

  _updateShadowMapsByScalar(s) {
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
