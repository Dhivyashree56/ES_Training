/*Question 3:
Create two functions add (a,b) and multiply (a,b). Call add, then use the result of add function to calculate product with 
Using all four ways: callback, promise, async-await and convert callback to promise using promisify.
*/
const util = require('util');
//Callback
function add(a,b,callbackFunc){
    multiply(a+b,callbackFunc);
}
function multiply(a,callbackFunc){
    callbackFunc(a*5);
}
add(5,7,answer=>{
    console.log('Callback: '+ answer);
});

//Promisify
const promisfy = util.promisify(add);
promisfy(5,7).then((answer)=>{
    console.log('Promisify: ' + answer);
}).catch((err)=>{
    console.log('Promisify: ' + err);
});

//Promise
function addPromise(a,b){
    const pr = new Promise((resolve,reject)=> {
        resolve(a+b);
    });
    return pr;
}
function mulPromise(a){
    const newPr = new Promise((resolve) => {
        resolve(a*5);
    });
    return newPr;
}
addPromise(5,7).then((answer)=>{
    return mulPromise(answer);
}).then((answer) => {
    console.log('Promise: '+answer);
});

//Async & Await
async function addAsyncFunc(a,b){
    return new Promise((resolve,reject) => {
        resolve (a+b);
    });
}
async function mulAsyncFunc(a){   
    return new Promise((resolve,reject) => {
        resolve (a*5);
    });
}
(async function(){
    let ans = await addAsyncFunc(5,7);
    console.log('Async: '+await mulAsyncFunc(ans));
})();