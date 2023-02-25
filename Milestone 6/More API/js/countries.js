const loadData = () => {

    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayData(data))
        .catch(error => {

            console.log(error)

        })

}

const loadData2 = async() => {

    try{

        const res = await fetch('https://restcountries.com/v3.1/all')
        const data = await res.json()
    
        displayData(data)

    }

    catch(error){

        console.log(error)

    }

}

const displayData = data => {

    const countriesContainer = document.getElementById('all-countries');

    data.forEach(country => {

        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `

            <h3> Name: ${country.name.common}</h3>
            <h3> Name: ${country.capital ? country.capital[0] : 'No Capital'}</h3>

        `;

        countriesContainer.appendChild(countryDiv);

    })

}

loadData()