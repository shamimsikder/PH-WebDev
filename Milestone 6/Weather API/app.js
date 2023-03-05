// Add Your API Key From "api.openweathermap.org"
const API_KEY = '';

const loadTemperature = city => {

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    fetch(URL)
        .then(res => res.json())
        .then(data => displayTemperature(data))

}

const setInnerText = (id, text) => {

    document.getElementById(id).innerText = text

}

const displayTemperature = temperature => {
    console.log(temperature.name)
    setInnerText('city', temperature.name)
    setInnerText('temperature', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);

    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    
    //imgIcon.setAttribute('src', url);

}

document.getElementById('btn').addEventListener('click', function(){

    const searchField = document.getElementById('search')
    const city = searchField.value
    loadTemperature(city)

})

loadTemperature('Dhaka')