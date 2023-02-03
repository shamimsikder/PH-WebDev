let object = {

    name: "abcd",
    age: 27

};

console.log(object)
console.log(typeof object)
console.log(typeof object.age)

object.age = String(object.age);

console.log(object)
console.log(typeof object)
console.log(typeof object.age)
