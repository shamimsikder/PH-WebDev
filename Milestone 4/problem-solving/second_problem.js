function evenOdd(string){

    if(typeof string !== 'string'){
        return 'Please Enter A String';
    }

    let strLength = string.length;

    if(strLength % 2 === 0){
        return 'even';
    }

    else{
        return 'odd';
    }

}

console.log(evenOdd("React.js"));
console.log(evenOdd("HTML"));
console.log(evenOdd("JavaScript"));