var events = require('events');
var eventEmitter = new events.EventEmitter();

myFunction = ()=>{
    console.log("change is working here.");
}

eventEmitter.on("change", myFunction);

eventEmitter.emit("change");