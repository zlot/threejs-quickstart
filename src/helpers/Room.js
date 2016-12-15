import { BoxGeometry, MeshPhongMaterial, Mesh } from 'three'
import { scene } from '../setup'
export default class Room {

  constructor() {
    this.width = this.height = this.depth = 100
    this.geo = new BoxGeometry(this.width, this.width, this.width)
    this.mat = new MeshPhongMaterial({
      color: 0xa0adaf,
      shininess: 10,
      specular: 0x111111,
      side: THREE.BackSide
    })

    this.mesh = new Mesh(this.geo, this.mat)
    this.mesh.receiveShadow = true
    scene.add(this.mesh)
  }

}
