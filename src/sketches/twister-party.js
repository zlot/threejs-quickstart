import _ from 'lodash'
import * as THREE from 'three'
import { scene, camera, renderLoop } from '../setup'
import Room from '../helpers/Room'
import randomColor from 'random-color'

let room = new Room()

let lightGroups = []
let createLightGroup = function() {
  let color = randomColor(0.99,0.99).hexString()
  let l = new THREE.PointLight(color, .75, 80)

  let sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 8, 8),
    new THREE.MeshBasicMaterial({
      color
    })
  )
  let group = new THREE.Object3D()
  group.add(l)
  // group.add(sphere)
  scene.add(group)
  lightGroups.push(group)
  group.userData.rand = _.random(-50,50)
  return group
}

let createSphere = function() {
  let sphere = new THREE.Mesh(
    new THREE.SphereGeometry(3, 16, 16),
    new THREE.MeshPhongMaterial({
      color: 0xffffff
    })
  )
  sphere.position.set(_.random(-50,50), _.random(-50,50), _.random(-50,50))
  scene.add(sphere)
}

let toruses = []

let createTorus = function() {
  let torus = new THREE.Mesh(
    new THREE.TorusKnotBufferGeometry(2, .5, 64, 12, 11, 3),
    new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.4,
      metalness: 1.0
    })
  )
  torus.position.set(_.random(-50,50), _.random(-50,50), _.random(-50,50))
  torus.rotation.set(_.random(2*Math.PI), _.random(2*Math.PI), _.random(2*Math.PI))
  torus.userData.rand = _.random(-1,1)
  scene.add(torus)
  toruses.push(torus)
}


_.times(5, createLightGroup.bind(this))
_.times(225, createTorus)

renderLoop(() => {
  let time = performance.now() * 0.001
  lightGroups.forEach(group => {
    group.position.set(
      group.userData.rand*Math.cos(group.userData.rand*.05*time),
      group.userData.rand*2*Math.sin(group.userData.rand*.05*time),
      group.userData.rand*1.2*Math.sin(group.userData.rand*.05*time)
    )
  })

  camera.position.x = Math.sin(time*0.2) * room.width/2
  camera.position.y = Math.cos(time*0.1) * room.height/2
  camera.position.z = camera.position.x * camera.position.y *0.02
  camera.up = new THREE.Vector3(0,0,1);

  toruses.forEach(torus => {
    torus.rotation.set(
      Math.cos(time*torus.userData.rand),
      2*Math.sin(time*torus.userData.rand),
      1.2*Math.sin(time*torus.userData.rand)
    )
  })

})
