function highestInArray(arr){

    let largest = arr[0];

    for(let i=0; i<arr.length; i++){

        if(largest < arr[i]) largest = arr[i];

    }

    return largest;

}

let array = [145,189,155,262,177,144];

let res = highestInArray(array);

console.log(res);