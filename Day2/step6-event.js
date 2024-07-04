let EventEmitter = require('node:events').EventEmitter;

/*
let myEvent = new EventEmitter();

// setTimeout(() =>{
//     myEvent.emit('appleEvent');
// },2000)

// myEvent.setMaxListeners(4)

let firstFun = function(){
    console.log('Apple Event Happened First');
}

let secondFun = function(){
    console.log('Apple Event Happened Second');
}

let thirdFun = function(){
    console.log('Apple Event Happened Third');
}

let fourthFun = function(){
    console.log('Apple Event Happened Fourth');
}

let fifthFun = function(){
    console.log('Apple Event Happened Fifth');
}

myEvent.addListener('appleEvent', firstFun);
myEvent.addListener('appleEvent', secondFun);
myEvent.addListener('appleEvent', thirdFun);
myEvent.addListener('appleEvent', fourthFun);
myEvent.addListener('appleEvent', fifthFun);

myEvent.removeListener('appleEvent', thirdFun);
myEvent.removeListener('appleEvent', fourthFun);

setInterval(function(){
    myEvent.emit('appleEvent');
}, 2000)


setTimeout(() => {
    myEvent.removeAllListeners('appleEvent');
}, 10000)
console.log(myEvent.listenerCount('appleEvent'));
*/

