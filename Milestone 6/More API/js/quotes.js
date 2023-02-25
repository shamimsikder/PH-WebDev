const loadQuote = () =>{

    fetch('https://api.kanye.rest/')
        .then(resource => resource.json())
        .then(data => displayData(data))

}

const loadQuote2 = async() => {

    try{

        const res = await fetch('https://api.kanye.rest/')
        const data = await res.json()

        displayData(data)

    }

    catch{
        console.log(error)
    }

}

const displayData = quote => {

    const blockQuote = document.getElementById('quotes')
    blockQuote.innerHTML = quote.quote

}

document.getElementById('refresh').addEventListener('click', function(){

    loadQuote2()

})

loadQuote()