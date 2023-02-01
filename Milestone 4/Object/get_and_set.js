function createShoppingCart(){
    return{
        cap: 3,
        shirt: 4,
        pant: 2,
        sunglass: 2,
        watch: 1
    };
}

let shoppingCart = createShoppingCart();

console.log(shoppingCart);

// Set property Values

shoppingCart.cap = 2;
console.log(shoppingCart);

shoppingCart['cap'] = 3;
console.log(shoppingCart);

let name = 'pant';
shoppingCart[name] = 4;
console.log(shoppingCart);