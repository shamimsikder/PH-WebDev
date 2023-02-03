let phone = [
    {name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver'},
    {name: 'Walton', camera: 24, storage: '32gb', price: 23000, color: 'black'},
    {name: 'iphone', camera: 12, storage: '32gb', price: 120000, color: 'silver'},
    {name: 'Xiaomi', camera: 48, storage: '32gb', price: 22000, color: 'black'},
    {name: 'Realme', camera: 48, storage: '32gb', price: 14000, color: 'black'},
    {name: 'Oppo', camera: 48, storage: '32gb', price: 21000, color: 'silver'},
    {name: 'Nokia', camera: 24, storage: '32gb', price: 25000, color: 'silver'}
];

function expensivePhone(phones){

    let expensive = phones[0];

    for(let i = 0; i < phones.length; i++){

        let phone = phones[i];
        
        if(phone.price > expensive.price){

            expensive = phone;

        }

    }

    return expensive;

}

console.log(expensivePhone(phone));