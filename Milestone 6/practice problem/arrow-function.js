// Problem - 1

const x = (a) =>  a / 5 ; 

console.log(x(10))
console.log(x(125))
console.log(x(8))

// Problem - 2

const y = (a,b) => (a + 2) * (b + 2);

console.log(y(5, 5))
console.log(y(4, 4))
console.log(y(12, 12))

// Problem - 3

const z = (a,b,c) => a * b * c;

console.log(z(5, 5, 5))
console.log(z(4, 4, 4))
console.log(z(2, 2, 2))

// Problem - 4

const res = (a,b) => {

    const r = a + 2
    const p = b + 2

    return r * p

}

console.log(res(5, 5))
console.log(res(4, 4))
console.log(res(12, 12))