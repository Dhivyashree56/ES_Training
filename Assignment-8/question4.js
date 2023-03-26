//Demonstrate replace all occurrences of a string within a sentence.

let str="I love dogs. Dogs are caring. Dogs are loved by most people.";
console.log('Original string: '+str);
str=str.replaceAll("Dogs","Cats");
str=str.replaceAll("dogs","cats");
console.log('Replaced string: '+str);