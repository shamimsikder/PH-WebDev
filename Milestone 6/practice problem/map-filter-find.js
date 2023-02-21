// Problem - 1

const arr = [1, 3, 5, 7, 9];
const arr2 = [];

for (let i of arr) {
  let n = i + 1;
  arr2.push(n);
}

console.log(...arr2); 

const arr3 = arr.map(n => n + 1)

console.log(...arr3); 

// Problem - 2

const array = [33, 50, 79, 78, 90, 101, 30 ]

const array2 = array.filter(n => n % 10 === 0)

console.log(array2)

// Problem - 3

const array3 = array.find(n => n % 10 === 0)

console.log(array3)