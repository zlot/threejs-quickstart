import Stats from 'stats.js'
import eventHub from './eventHub'

let stats = new Stats()

document.body.appendChild(stats.dom)

eventHub.addEventListener('render', stats.update.bind(stats))

export default stats
