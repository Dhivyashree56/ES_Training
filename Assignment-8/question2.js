//Show examples of use of splice method to add and remove elements from array.

const colours=["Red","Green","Blue","Black","Pink"];
console.log('Original Array: '+colours.toString());
//Adding new elements
colours.splice(3,2,"White","Grey");
// (3) defines position to add new elements, (2) defines howmany element should be deleted 
//["White","Grey"] defines new elements to be added
console.log('New Array after adding: '+colours.toString());
//Removing elements
colours.splice(0,2);
//(0) defines the position to add new elements, (2) defines no.of elements to be deleted
//Rest of the parameters are omitted, no new parameters will be addedd
console.log('New Array after removing: '+colours.toString());