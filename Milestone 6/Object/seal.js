const bottle = {

    color: "green",
    price: 30,
    isCleaned: true,
    capacity: 1

}

console.log(bottle)

Object.seal(bottle)

delete bottle.isCleaned

console.log(bottle)

bottle.price = 60
bottle.height = 12

console.log(bottle)