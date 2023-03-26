//Write a function that takes object as input and prints all keys and values in a valid JSON format

const person = {
    Name: "James",
    Age: 25,
    City: "Coimbatore",
    Nationality: "English"
  };
  
console.log(JSON.stringify(person));