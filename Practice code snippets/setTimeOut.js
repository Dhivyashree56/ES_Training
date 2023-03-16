const { clearInterval } = require("timers");

var myTimeout=setTimeout(myGreeting,'2000');
var newTimeout=setTimeout(newGreeting,'7000');
    
function myGreeting(){
    console.log("Hai:)");
    clearTimeout(newTimeout);
}
function newGreeting(){
    console.log('Hello!');
}

const myFunc = (arg1,arg2) => {
    console.log("Hello "+arg1+" "+arg2);
};

//2 timeout with one function
setTimeout(myFunc,'8000','Dhivya','Welcome');

const myNewFunc= delay => {
    console.log("hello is printed after "+delay+" seconds");
}
setTimeout(myNewFunc,'5000','five');
setTimeout(myNewFunc,'10000','ten');

const timerId=setImmediate(myFunc,'Guys','Welcome');
//clearImmediate(timerId);