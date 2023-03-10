const addProduct = () => {

    const productField = document.getElementById('product')
    const quantityField = document.getElementById('quantity')

    const product = productField.value
    const quantity = quantityField.value

    showProduct(product, quantity)
    saveItemLocalStorage(product, quantity)

    productField.value = ''
    quantityField.value = ''

}

const showProduct = (product, quantity) => {

    const list = document.getElementById('list')
    const li = document.createElement('li')

    li.innerText = `${product}: ${quantity}`

    list.appendChild(li)

}

const getStoredItem = () => {

    let item = {}
    const storedItem = localStorage.getItem('item')

    if(storedItem){
        item = JSON.parse(storedItem)
    }

    return item

}

const saveItemLocalStorage = (product, quantity) => {

    const item = getStoredItem()

    item[product] = quantity

    const itemStringified = JSON.stringify(item)

    localStorage.setItem('item',itemStringified)

}

const showProductFromLocalStorage = () => {

    const savedItem = getStoredItem()

    for(const product in savedItem){

        const quantity = savedItem[product]

        showProduct(product, quantity)

    }

}

showProductFromLocalStorage()