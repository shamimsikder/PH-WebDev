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

shoppingCart1.watch = 1;
console.log(shoppingCart1);

shoppingCart1['shirt'] = 4;
console.log(shoppingCart1);

let sunglass = 'sunglass';
shoppingCart1[sunglass] = 2;
console.log(shoppingCart1);

//Cart Two

let shoppingCart2 = createShoppingCart(1,3,2,1);
console.log(shoppingCart2)