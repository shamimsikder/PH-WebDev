const a = [3,5,8,11]
const str = ['mustang', 'f-150', 'expedition']

const [str1, ...str2] = str
const [x,y, ...z] = a

console.log(x)
console.log(y)
console.log(...z)

console.log(str1)
console.log(...str2)

