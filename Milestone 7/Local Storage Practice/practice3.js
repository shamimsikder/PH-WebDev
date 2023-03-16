const addProduct = () => {

    const productField = document.getElementById('product')
    const quantityField = document.getElementById('quantity')

    const product = productField.value
    const quantity = quantityField.value

    saveToLocalStorage(product, quantity)

    document.getElementById('list').innerHTML += `<li>${product}: ${quantity}`

    productField.value = ''
    quantityField.value = ''

}

const getFromLocalStorage = () => {

    const storedItem = JSON.parse(localStorage.getItem('items'))

    return storedItem

}

const saveToLocalStorage = (product, quantity) => {

    const item = getFromLocalStorage()

    item[product] = quantity

    localStorage.setItem("items", JSON.stringify(item))

}

const showOldData = () => {

    const items = getFromLocalStorage()
    
    for( const item in items) {
      
        document.getElementById('list').innerHTML += `<li>${item}: ${items[item]}`
    
    };
       
}

showOldData()