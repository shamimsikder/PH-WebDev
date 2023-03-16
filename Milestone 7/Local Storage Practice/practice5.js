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
