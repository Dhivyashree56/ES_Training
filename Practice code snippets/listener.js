var events=require('events');
var eventEmitter=new events.EventEmitter();
//Bind listener1 
var listener1=function listener1(){
    console.log('Listener1 executed');
}
var listener2=function listener2(){
    console.log('Listener2 executed');
}
eventEmitter.addListener('connection',listener1);
eventEmitter.on('connection',listener2);
var eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listener(s) listening to connection event");
eventEmitter.removeListener('connection',listener1);
console.log("Listener1 is removed");
var eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listener(s) listening to connection event");
console.log("Program Ended!");