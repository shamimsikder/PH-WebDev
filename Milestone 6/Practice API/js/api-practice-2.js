// Convert to JSON & Save JSON File

/*const fs = require('fs')

const cars = [
    
    {
      _id: "60795d4e0489a32f948c4167",
      name: "Honda Sedan",
      price: "132",
      description: "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Automatic",
      imageURL: "https://i.ibb.co/54WzQjR/Honda.png",
    },

    {
      _id: "60795e440489a32f948c4168",
      name: "MitoSedan",
      price: "221",
      description: "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Manual",
      imageURL: "https://i.ibb.co/802Rwsq/Mito.png",
    },

    {
      _id: "60795fc20489a32f948c4169",
      name: "Isuzu Tacoma",
      price: "105",
      description: "Vehicle Type: Pickup Truck, Doors: 5, Seats: 4, Luggage: 6 Suitcases / 8 Bags, Transmission: Manual",
      imageURL: "https://i.ibb.co/SJK7QYs/isuzu.png",
    },

    {
      _id: "6079615d0489a32f948c416a",
      name: "Chevrolet Crossover",
      price: "434",
      description: "Vehicle Type: Crossover, Doors: 5, Seats: 7, Luggage: 5 Suitcases / 5 Bags, Transmission: Automatic",
    },

];

const json = JSON.stringify(cars)

fs.writeFile('cars.json', json, (err) => {

    if (err) {
        console.error(err);
    } 
    else {
        console.log('File saved!');
    }

})*/

const loadData = async() => {

    const res = await fetch('cars.json')
    const data = await res.json()

    showAllData(data)

}

const showAllData = (cars) => {

    const container = document.getElementById('container')

    cars.forEach((car) => {

        const div = document.createElement('div')
        div.classList.add("w-96", "h-96", "p-5", "bg-slate-100", "mb-10")

        div.innerHTML = `
        
        <img  src="${car.imageURL}" alt="">
        <h1 class="mt-5">Car Name: ${car.name}</h1>
        <p class="mt-3">Car Details: ${car.description}</p>
        <button class="mt-3 px-3 py-1 bg-blue-500 rounded-md text-white">Car Price: ${car.price}</button>
        
        `;

        container.appendChild(div)

    })

}

loadData()