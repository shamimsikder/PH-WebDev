const items = []

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

const saveToLocalStorage = (product, quantity) => {

    const item = {}

    item[product] = quantity

    items.push(item)

    localStorage.setItem("items", JSON.stringify(items))

}