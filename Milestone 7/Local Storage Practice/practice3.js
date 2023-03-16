const addProduct = () => {

    const product = document.getElementById('product').value
    const quantity = document.getElementById('quantity').value

    document.getElementById('list').innerHTML += `<li>${product}: ${quantity}`

    product = ''
    quantity = ''

}