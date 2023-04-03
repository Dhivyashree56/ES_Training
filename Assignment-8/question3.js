// Demonstrate an example that shows that array elements can be of different types.

//JavaScript variables can be objects. Arrays are special kinds of objects.
//Because of this, you can have variables of different types in the same Array.

const person=["Rohan","Josh",46,true];
console.log(person);
console.log("FirstName: "+person[0]+"\nLastName: "+person[1]+"\nAge: "+person[2]);
function arrayDatatype(person){
    var txt="";
    txt+=(typeof(person[0])+" "+typeof(person[1])+" "+typeof(person[2])+" "+typeof(person[3]));
    return txt;
}
console.log(arrayDatatype(person));
module.exports=arrayDatatype;