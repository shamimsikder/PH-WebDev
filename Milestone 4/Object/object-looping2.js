function createShoppingCart(cap,shirt,sunglass,watch){

    return{

        cap,
        shirt,
        sunglass,
        watch

    };

}

//Cart One

let shoppingCart1 = createShoppingCart(3,1,1,2);
console.log(shoppingCart1);

let keys = Object.keys(shoppingCart1);
console.log(keys);

for(let i = 0; i<keys.length; i++){
    let name = keys[i];
    let values = shoppingCart1[name];

    console.log(name, values);
}