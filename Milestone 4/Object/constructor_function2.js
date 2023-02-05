function cars(model,year,color){

    this.model = model;
    this.year = year;
    this.color = color;

    this.getCars = function(){

        console.log(`${model}  ${year} ${color}`);

    }

};

let car1 = new cars("SUV", 2023, "Black");

car1.getCars();