const arr = [12,34,56,76,43,5];

const [a,b,c] = arr

console.log(...arr)

console.log(a,b,c)

const [x,y,...z] = arr

console.log(x,y)
console.log(...z)
