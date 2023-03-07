function example(a, b) {
    
    try {
    
        if (isNaN(a) || isNaN(b)) {
            throw Error('Enter Valid Number')
        }
    
        console.log(a + b)
    
    } 
    
    catch (error) {
        console.log(error.message)
    }
}

example(2, "b")
example("b", 2)
example(5, 2)
