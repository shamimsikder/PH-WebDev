const student = {

    name: "Kuddus",
    money: 5000,
    study: "Math",
    subjects: ["calculus", "algebra", "geometry"],
    exam: function(){
        return this.name + " is participating a exam"
    },

    improveExam: function(subject){
        //this.exam()
        return `${this.name} is taking improvement exam on ${subject}`
    }

}

const output = student.exam()

console.log(output)
console.log(student.improveExam(student.subjects))
