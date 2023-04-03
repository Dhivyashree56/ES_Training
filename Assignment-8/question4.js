//Demonstrate replace all occurrences of a string within a sentence.
let str="I love dogs. Dogs are caring. Dogs are loved by most people.";

function replaceString(str){
    str=str.replaceAll("Dogs","Cats");
    str=str.replaceAll("dogs","cats");
    return str;
}
console.log(replaceString(str));
module.exports=replaceString;