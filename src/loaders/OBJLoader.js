import * as THREE from 'three'

global.THREE = THREE // required for OBJLoader.js to attach itself

require('three/examples/js/loaders/OBJLoader.js')

export default THREE.OBJLoader
