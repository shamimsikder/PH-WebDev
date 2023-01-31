function sum(...args){
    console.log(args);
}

console.log(sum(1,2,3,4,5));

function summation(...args){
    return args.reduce((a,b) => a+b);
}

console.log(summation(1,2,3,4,5));

function price(discount, ...prices){ //rest parameter must last parameter
    let total = prices.reduce((a,b) => a + b);

    return total * (1 -  discount);
} 

console.log(price(0.1,20,30,40));