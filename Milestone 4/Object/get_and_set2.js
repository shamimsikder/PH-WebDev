let cars = {
    name: 'Honda',
    model: 2019,
    colors: 'black',
    price: 20000
}

console.log(cars)

// Set Property Values

cars.name = 'Toyota';
console.log(cars);

cars['model'] = 2012;
console.log(cars);

let price = 'price';
cars[price] = 10000;
console.log(cars);
