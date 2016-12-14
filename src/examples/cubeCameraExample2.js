import * as THREE from 'three'
import { scene, camera, renderer, renderLoop } from '../setup'

/*** Skybox ***/
let skybox = new THREE.CubeTextureLoader()
  .setPath('../../textures/swedish_royal_castle/')
  .load(['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg'])
skybox.mapping = THREE.CubeReflectionMapping
scene.background = skybox

/** Camera **/
camera.position.set(150, 35, 0)


let mirrors = []

let createMirrorBox = (boxGeometry) => {
  let cubeCamera = new THREE.CubeCamera(1, 1000, 1024)
  let mirror = new THREE.Mesh(boxGeometry, new THREE.MeshBasicMaterial({
    envMap: cubeCamera.renderTarget.texture
  }))
  mirror.userData.cubeCamera = cubeCamera
  scene.add(mirror)
  mirror.add(cubeCamera) // note we add the cubeCamera to the mirror, so it follows position
  mirrors.push(mirror)
  return mirror
}

let mirror1 = createMirrorBox(new THREE.BoxGeometry(5, 100, 50))
mirror1.position.set(-20, 0, 0)
let mirror2 = createMirrorBox(new THREE.BoxGeometry(5, 100, 20))

// NOTE the rotation of mirror2, and the OPPOSITE rotation of the cubeCamera!
// Otherwise, reflection will be wrong!
mirror2.rotation.y = Math.PI/2
mirror2.userData.cubeCamera.rotation.y = -Math.PI/2
mirror2.position.set(30, 0, 30)


let normalCube = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 30), new THREE.MeshNormalMaterial())
normalCube.position.x = 30
scene.add(normalCube)

renderLoop(() => {
  let time = performance.now()*0.001

  normalCube.rotation.y = time
  normalCube.rotation.x = Math.sin(time) * 2
  normalCube.position.z = Math.sin(time) * 25 - 30

  mirror1.position.z = 30*Math.sin(time*1.5) - 15

  // hide cube, otherwise the cubeCamera can't see through it!
  mirrors.forEach(mirror => {
    mirror.visible = false
    mirror.userData.cubeCamera.updateCubeMap(renderer, scene)
    mirror.visible = true
  })
})
