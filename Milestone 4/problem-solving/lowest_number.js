function lowestInArray(arr){

    let lowest = arr[0];

    for(let i=0; i<arr.length; i++){

        if(lowest > arr[i]) lowest = arr[i];

    }

    return lowest;

}

let array = [145,189,155,122,177,144];

let res = lowestInArray(array);

console.log(res);