function findingBadData(array){
    
    if (!Array.isArray(array)){
        return 'Please Enter An Array';
      }      

      for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== 'number') {
          return 'Please Enter An Array Of Numbers';
        }
      }

    let badDataCount = 0;

    for(let i = 0; i < array.length; i++){

        if(array[i] < 0){
            badDataCount++;
        }

    }

    return badDataCount;

}

console.log(findingBadData(['6',7,5]))
console.log(findingBadData([6,7,5]))
