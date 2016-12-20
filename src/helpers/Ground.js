import { Mesh, MeshPhongMaterial, PlaneGeometry } from 'three'
import { scene } from '../setup'

export default class Ground {

  constructor() {
    let geo = new THREE.PlaneGeometry(100, 100)
    geo.rotateX(-Math.PI/2)

    let mat = new MeshPhongMaterial()

    this.mesh = new THREE.Mesh(geo, mat)

    this.mesh.position.set(0, -20, 0)
    this.mesh.receiveShadow = true
    scene.add(this.mesh)
  }

}
