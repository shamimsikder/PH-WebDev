const bottle = {

    color: "green",
    price: 30,
    isCleaned: true,
    capacity: 1

}

// for...of can not used with objects

const keys = Object.keys(bottle)
const values = Object.values(bottle)

for(const key of keys){
    console.log(key, bottle[key])
}

// for...in

for(const key in bottle){
    console.log(key, bottle[key])
}

// Object.entries()

const pair = Object.entries(bottle)

for(const [key,value] of pair){
    console.log(key, value)
}