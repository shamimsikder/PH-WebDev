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

const getProduct = () => {

    let items = {}
    const item = localStorage.getItem('items')

    if(item){

        items = JSON.parse(item)

    }

    return items

}

const addItemToLocalStorage = (product, quantity) => {

    const items = getProduct()

    items[product] =quantity

    localStorage.setItem('items', JSON.stringify(items))

}

const showLocalStorage = () => {

    const items = getProduct()

    for(const item in items){

        document.getElementById('list').innerHTML += `<li>${item}: ${items[item]}`

    }

}

showLocalStorage()