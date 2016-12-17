import * as THREE from 'three'

global.THREE = THREE // required for OrbitControls.js to attach itself

require('three/examples/js/controls/OrbitControls.js')

export default THREE.OrbitControls
