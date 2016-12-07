import { AmbientLight, DirectionalLight, SpotLight } from 'three'

export default function createThreePointLighting(scene) {

  // soft white light
  let ambientLight = new AmbientLight(0x404040)
  scene.add(ambientLight)

  // white directional light at half intensity, shining from the top
  let directionalLight = new THREE.DirectionalLight(0xffffff, .5)
  directionalLight.position.set(0, 5, 0)
  directionalLight.castShadow = true
  scene.add(directionalLight)

  // white point light
  let pointLight = new THREE.PointLight(0xffffff)
  pointLight.position.set(1, 1, 1)
  pointLight.castShadow = true
  scene.add(pointLight)

  let createHelpers = () => {
    scene.add(new THREE.DirectionalLightHelper(directionalLight))
    scene.add(new THREE.PointLightHelper(pointLight, 0.1))
  }

  return {
    ambientLight,
    directionalLight,
    pointLight,
    createHelpers
  }
}
