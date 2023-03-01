const first = {a:2,b:3}
const second = {a:2,b:3}
const third = {a:2,b:4}

function compareObject(x, y){

    const fkey = Object.keys(x)
    const skey = Object.keys(y)

    if(fkey.length === skey.length){
        
        for(const key of fkey){

            if(x[key] !== y[key]){
                return false
            }

        }
        
        return true
    }
    else return false

}

console.log(compareObject(first, second))
console.log(compareObject(first, third))