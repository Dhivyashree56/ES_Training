/*1. Callback function:
        A callback function is a function passed into another function as an argument, which is called (or executed) inside the otherFunction.

  2. Promise:
        The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

  3. Async & Await
        The async function declaration defines an asynchronous function, which returns an AsyncFunction object.
        It means a function always returns a promise. If the code has return <non-promise> in it, then JavaScript automatically wraps it into a resolved promise with that value.
        The keyword await makes JavaScript wait until that promise settles and returns its result.
*/
var fs = require("fs");    
//Callback
fs.readFile('inputfile1.txt', function (ferr, filedata) {  
    console.log('Callback Fuction:');
    if (ferr) 
        return console.error(ferr);  
    console.log(filedata.toString());
    console.log('Callback Fuction Finished\n');
}); 

//Promise
const pr = new Promise((resolve,reject)=>{
    fs.readFile('inputfile1.txt', function (ferr, filedata) { 
        console.log('Promise:'); 
        if (ferr) 
            reject(ferr);
        else
            resolve(filedata);
    });
})
.then((filedata) => {
    console.log(filedata.toString()); 
}).catch((ferr) => {
    return console.error(ferr);
}).finally(()=>{
    console.log('Promise completed \n');
})

//Async/await
async function readfile(){ 
    await fs.readFile('inputfile.txt',function (ferr, filedata){
        console.log('Async/await:');
        if(ferr){
            return console.error(ferr);
        }
        console.log(filedata.toString());
        console.log('Async/await Finished\n');
    });
}
readfile();