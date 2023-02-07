function mindGame(number){

    if(typeof number !== 'number' || number < 0){
        return 'Please Enter A Number(Positive Number)';
    }

    number = number * 3;
    number = number + 10;
    number = number / 2;
    number = number - 5;

    return number;

}

console.log(mindGame(15))
console.log(mindGame(5))
console.log(mindGame(-5))

