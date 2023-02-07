function isLGSeven(number){

    if(typeof number !== 'number'){
        return 'Please Enter A Number';
    }

    let result = number - 7;

    if(result < 7){
        return result;
    }
    
    else {
        return number * 2;
    }

}

console.log(isLGSeven(6))
console.log(isLGSeven(15))