const loadAllData = () => {

    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => displayAllData(data))

}

const displayAllData = (countries) => {

    const container = document.getElementById('countries-info')

    countries.slice(1, 9).forEach((country) => {

        const div = document.createElement('div')

       // div.classList.add(`card w-96 bg-base-100 shadow-xl`)

        div.innerHTML = `
        <div class="card w-96 h-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src="${country.flags.png}" alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">${country.name.common}</h2>
                <p>Population: ${country.population}</p>
                <div class="card-actions">
                <label onclick = "showDetails('${country.cca2}')" for="my-modal-6" class="btn btn-primary">Details</label>    
            </div>
        </div>

        
        `;

        container.appendChild(div)

    })

}

const showDetails = (id) => {

    const URL = `https://restcountries.com/v3.1/alpha/${id}`

    fetch(URL)
        .then(res => res.json)
        .then(data => data)

}

loadAllData()