let shoppingCart = [

    {name: 'shoe', price: 2500},
    {name: 'shirt', price: 1400},
    {name: 'pant', price: 1600},
    {name: 'belt', price: 800},
    {name: 'watch', price: 8000}

];

function totalCost(products){

    let total = 0;

    for(let i = 0; i < products.length; i++){

        let product = products[i].price;

        total += product;

    }

    return total;

}

console.log(totalCost(shoppingCart))