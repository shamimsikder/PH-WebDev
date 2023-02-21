function defaultParameter(a, b = 5){

    return a+b;

}

console.log(defaultParameter(7))

function defaultParameter2(a, b){

    b = 5

    return a+b;

}

console.log(defaultParameter2(7))

function defaultParameter3(a, b){

    if(b === undefined) b=3

    return a+b;

}

console.log(defaultParameter3(7))
