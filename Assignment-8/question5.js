//Write a function that takes object as input and prints all keys and values in a valid JSON format

function JSON_string(){
  const Person = {
    Name: "James",
    Age: 25,
    City: "Coimbatore",
    Nationality: "English"
  };
  return JSON.stringify(Person);
}
module.exports=JSON_string;