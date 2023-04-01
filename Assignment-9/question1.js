//Keypress Events
var keypress = require('keypress');
 
// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);
 
// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
  console.log('got "keypress"', key);
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  }
});
 
process.stdin.setRawMode(true);
process.stdin.resume();

//Mouse Events
const mouseEvents = require("global-mouse-events");

mouseEvents.on("mouseup", event => {
  console.log(event); // { x: 2962, y: 483, button: 1 }
});

mouseEvents.on("mousedown", event => {
  console.log(event); // { x: 2962, y: 483, button: 1 }
});

mouseEvents.on("mousemove", event => {
  console.log(event); // { x: 2962, y: 482 }
});

mouseEvents.on("mousewheel", event => {
  console.log(event); // { x: 2962, y: 483, delta: -1, axis: 0 }
});