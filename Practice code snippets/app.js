const EventEmitter = require('events');
const eventEmitter=new EventEmitter();
eventEmitter.on('tutorial',(num1,num2)=> {
    console.log(num1+num2);
});
eventEmitter.emit('tutorial',2,3);
class Person extends EventEmitter{
    constructor(name){
        super();
        this._name=name;
    }
    get name(){
        return this._name;
    }
}
let dhivya=new Person("Dhivi");
let gokul=new Person("Gokul");

dhivya.on('name',()=>{
    console.log("My name is "+dhivya.name);
});
gokul.on('name',()=>{
    console.log("My name is "+gokul.name);
});
dhivya.emit('name')
gokul.emit('name');