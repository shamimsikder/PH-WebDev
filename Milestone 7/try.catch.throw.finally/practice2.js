function example(a){

    try{
        if(a > 50){
            console.log('Success')
        }
        else{
            throw Error('This number is low')
        }
    }

    catch(error){
        console.log(error.message)
    }

    finally{
        console.log('Complete')
    }

}

example(30)
example(60)
example(20)
example(80)