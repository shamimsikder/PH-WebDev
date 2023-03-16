const addProduct = () => {

    const productField = document.getElementById('product')
    const quantityField = document.getElementById('quantity')

    const product = productField.value
    const quantity = quantityField.value

    addItemToLocalStorage(product, quantity)

    document.getElementById('list').innerHTML += `<li>${product}: ${quantity}`

    productField.value = ''
    quantityField.value = ''

}

const getItemFromLocalStorage = () => {

    const item = JSON.parse(localStorage.getItem('data'))

    return item

}

const addItemToLocalStorage = (product, quantity) => {

    const items = getItemFromLocalStorage() || {}

    items[product] = quantity

    localStorage.setItem("data", JSON.stringify(items))

}

