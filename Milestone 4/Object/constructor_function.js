function Circle(radius) {

    this.radius = radius;

    this.draw = function(){
        console.log('Draw');
    }

}

let circle1 = new Circle(45);

console.log(circle1)