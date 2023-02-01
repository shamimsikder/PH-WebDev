let circle = {
    radius: 1,
    location:{
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function(){
        console.log('draw');
    }
};

circle.draw();
console.log(circle.radius);
console.log(circle.location);
console.log(circle.isVisible);