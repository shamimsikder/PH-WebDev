const cartProductsLoader =  async() => {

    const loaderProducts = await fetch('products.json')
    const products = await loaderProducts.json()

    return products

}

export default cartProductsLoader