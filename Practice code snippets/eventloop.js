function first(){
    console.log('First');
}
function second(){
    setTimeout(()=> {
        console.log('Set Timeout');
    },0);
}
function third(){
    Promise.resolve(1).then(()=> {
        console.log('promise.resolve');
    });
}
function fourth(){
    setImmediate(()=> {
        console.log('Immediate');
    });
}
function fifth(){
   process.nextTick(()=> {
        console.log('Process in next iteration');
   });
}
console.log('By Hoisting - Global Execution first');
function final(){
    console.log('Final');
}

first();
second();
third();
fourth();
fifth();
final();