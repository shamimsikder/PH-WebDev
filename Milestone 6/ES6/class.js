class Instructor{

    name;
    designation = "Web Dev Instructor"
    team = "Web Team"
    location;

    constructor(name, location){
        this.name = name
        this.location = location
    }

    startSupport(time){
        console.log(`Start the support session at ${time}`)
    }

    createQuiz(module){
        console.log(`Please create quiz for module ${module}`)
    }

}

const abc = new Instructor("abc","Dhaka")
const xyz = new Instructor("xyz","Khulna")

console.log(abc)
console.log(xyz)

abc.startSupport("9:00")
abc.createQuiz(60)