/* 
Assignment:
    Create an event that is once every second for 10 seconds only
*/

let EventEmitter = require('node:events').EventEmitter

let event2 = new EventEmitter();
let count = 1;

event2.addListener('googleEvent', function(){ // 'on()' is used instead of addListener()
    console.log('Google Event Happened ' + count);
    count++;
})

let si = setInterval(() => {
    event2.emit('googleEvent');
}, 1000);

setTimeout(() => {
    event2.removeAllListeners('googleEvent'); // 'off()' is used instead of removeListener()
    clearInterval(si);
}, 10000)