function divide(a, b){

    try{

        if(b == 0){
            throw Error('cannot Divide by Zero')
        }

        return a/b

    }

    catch(error){
        console.log(error.message)
    }

    finally{
        console.log('Division Operation Complete')
    }

}

console.log(divide(10, 0))
console.log(divide(10, 2))