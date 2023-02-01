let shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 1,
    mouse: 1,
    cap: 2
}

let keys =  Object.keys(shoppingCart);
let values =  Object.values(shoppingCart);

console.log(keys);
console.log(values);

// Looping Through Object

for(let i=0; i<keys.length; i++){
    console.log(keys[i]+"---->"+values[i]);
}

for(let i=0; i<keys.length; i++){
    let propertyName = keys[i];
    let propertyValue = shoppingCart[propertyName];

    console.log(propertyName,propertyValue);
}