const addToDB = (id) => {

    let shoppingCart = {}

    const storedCart = localStorage.getItem('shopping-cart')

    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }

    const quantity = shoppingCart[id]

    if(quantity){
        const newQuantity = parseInt(quantity) + 1

        shoppingCart[id] = newQuantity
    }

    else{
        shoppingCart[id] = 1
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))

}

const removeFromDB = (id) => {

}

export {addToDB, removeFromDB}