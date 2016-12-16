# threejs-quickstart
Currently under construction.

## Notes
* Only use one renderLoop(()=>{})! Trying to decide whether to allow multiple renderLoops
  (eg if you want a class to control it's own special rendering instead of having
  to pile it all in the main renderLoop). At the moment I think it's best to keep
  the index.js clean, import everything necessary from modules, and then make calls
  here, manually, to all render/update functions as needed. This gives full control
  of rendering order and no "magic" that can confuse when debugging.
