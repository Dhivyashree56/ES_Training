// Using classes
class Student {
    constructor(name, roll_no, dept){
        this.name = name;
        this.roll_no = roll_no;
        this.dept = dept;
    }
}

const student = new Student('David', 33, 'ECE');
console.log('Hi, I am', student.name, student.roll_no, 'from', student.dept);

//Using functions
function Professor (name, dept) {
    this.name = name;
    this.dept = dept;
    this.designation = "Professor";
}
function Technician (name, dept) {
    this.name = name;
    this.dept = dept;
    this.designation = "Technician";
}
function Record (){
    this.create = (name, dept, designation) => {
        switch(designation){
            case 1:
                return new Professor(name,dept);
                break;
            case 2:
                return new Technician(name,dept);
                break;
        }
    };
}

const record = new Record();
const staffList = [];
staffList.push(record.create("Rajan", "EEE", 1));
staffList.push(record.create("Gokul", "MECH", 2));

staffList.forEach((staff)=>{
    console.log("I am", staff.name, "from", staff.dept, "I am a", staff.designation);
});
