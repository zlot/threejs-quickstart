import * as THREE from 'three'

global.THREE = THREE // required for TrackballControls.js to attach itself

require('three/examples/js/controls/TrackballControls.js')

export default THREE.TrackballControls
