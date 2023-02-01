function createStudentList(name,age,height,eyes,hair){

    return{

        Name: name,
        Age: age,
        Height: height,
        Eyes: eyes,
        Hair: hair,

        print() {
        console.log("Name: "+name);
        console.log("Age: "+age);
        console.log("Height: "+height);
        console.log("Eyes: "+eyes);
        console.log("Hair: "+hair);
    }

    };

}

let student1 = createStudentList("Chinku",16,"5","Blue","Short");
let student2 = createStudentList("Minku",15,"5","Blue","Long");
let student3 = createStudentList("Pinku",16,"5","Yellow","Long");
let student4 = createStudentList("Dinku",17,"5","Brown","Short");

console.log(student1)
console.log(student1.print())

console.log(student2)
console.log(student2.print())

console.log(student3)
console.log(student3.print())

console.log(student4)
console.log(student4.print())