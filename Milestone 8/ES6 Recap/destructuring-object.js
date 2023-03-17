const obj = {

    name: "kuddus",
    age: 25,
    job: "Bekar",
    id: 69

}

const {name, age, ...job} = obj

console.log(name, age)
console.log(job)
console.log(job.id)
