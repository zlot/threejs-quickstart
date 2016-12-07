import { AmbientLight, DirectionalLight, SpotLight } from 'three'

export default class ThreePointLighting {

  constructor(scene) {
    if(!scene) {
      throw new Error('Please provide a scene to ThreePointLighting constructor.')
    }

    this.ambientLight = new AmbientLight(0x404040)
    scene.add(this.ambientLight)

    this.keyLight = new THREE.PointLight(0xffffff, .5)
    this.keyLight.position.set(-15, 10, 20)
    this.keyLight.castShadow = true
    this.keyLight.shadow.mapSize.width *= 2
    this.keyLight.shadow.mapSize.height *= 2
    scene.add(this.keyLight)

    this.fillLight = new THREE.PointLight(0xffffff, this.keyLight.intensity/2)
    this.fillLight.position.set(-this.keyLight.position.x, 10, 20)
    this.fillLight.castShadow = true
    this.fillLight.shadow.mapSize.width *= 2
    this.fillLight.shadow.mapSize.height *= 2
    scene.add(this.fillLight)

    this.createHelpers = () => {
      scene.add(new THREE.PointLightHelper(this.keyLight, 1))
      scene.add(new THREE.PointLightHelper(this.fillLight, 1))
    }
  }
}
