function createCircle(x,y){

    return{

        radius: x,

        draw() {
            console.log(y);
            
        }

    };

}

const circle1 = createCircle(1,"Draw")
const circle2 = createCircle(2,"Sketch")

console.log(circle1)
console.log(circle1.draw())

console.log(circle2, circle2.draw())
console.log(circle2.draw())