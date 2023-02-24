const loadQuote = () =>{

    fetch('https://api.kanye.rest/')
        .then(resource => resource.json())
        .then(data => displayData(data))

}

const displayData = quote => {

    const blockQuote = document.getElementById('quotes')
    blockQuote.innerHTML = quote.quote

}

document.getElementById('refresh').addEventListener('click', function(){

    loadQuote()

})

loadQuote()