//Print all values of a nested obj

newObj={
    dept: "ECE",
    section: "A",
    toppers: [
        {firstName: "Sowndarya",lastName: " Ramesh", cgpa: [9.71,9.75,9.2]},
        {firstName: "Dhivya", lastName: "shree", cgpa: [9.14,9.72,9.65]},
        {firstName: "Renuka", lastName: "devi", cgpa: [9.5,8.9,9.6]}
    ]
}
let txt="";
for(let i in newObj.toppers){
   txt+="\n"+newObj.toppers[i].firstName+"\n";
   for(let j in newObj.toppers[i].cgpa){
    txt+=newObj.toppers[i].cgpa[j]+"\n";
   }
}
console.log(txt);