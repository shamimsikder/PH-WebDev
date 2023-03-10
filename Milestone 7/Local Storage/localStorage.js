const addProduct = () => {

    const productField = document.getElementById('product')
    const quantityField = document.getElementById('quantity')

    const product = productField.value
    const quantity = quantityField.value

    showProduct(product, quantity)

    productField.value = ''
    quantityField.value = ''

}

const showProduct = (product, quantity) => {

    const list = document.getElementById('list')
    const li = document.createElement('li')

    li.innerText = `${product}: ${quantity}`

    list.appendChild(li)

}