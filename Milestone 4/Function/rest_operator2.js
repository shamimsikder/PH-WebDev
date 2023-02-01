function concat(...string){

    let res = string.reduce((a,b) => a+b);
    return res;
}

console.log(concat("Hello","JavaScript","\nHola"," JavaScript"));