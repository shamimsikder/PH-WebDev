const loadData = async(searchText, dataLimit) => {

    try{

        const URL = `https://openapi.programming-hero.com/api/phones?search=${searchText}`

        const res = await fetch(URL)
        const data = await res.json()

        showData(data.data, dataLimit)

    }

    catch(err){

        console.log(err)

    }

}

const showData = (phones, dataLimit) => {

    const container = document.getElementById('data-container')
    const showAll = document.getElementById('show-all-btn')

    container.textContent = ''

    const noPhone = document.getElementById('text-warning')

    // Search Warning
    if(phones.length === 0){
        noPhone.classList.remove('hidden')
    }
    else{
        noPhone.classList.add('hidden')
    }

    //Show All Phone Data's Condition
    if(dataLimit && phones.length > 10){

        phones = phones.slice(0, 10)
        
        showAll.classList.remove('hidden')

    }

    else{

        showAll.classList.add('hidden')


    }

    phones.forEach((phone) => {
        console.log(phone.image)
        const div = document.createElement('div')

        div.innerHTML =  `
        
        <div class="card w-96 h-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">${phone.phone_name}</h2>
                <div class="card-actions">
                
            </div>
        </div>
        `;

        container.appendChild(div)

    })

    toggleSpinner(false)

}

//Search Data
const processSearch = (dataLimit) => {

    toggleSpinner(true)

    const search = document.getElementById('search-field')
    const searchText = search.value

    loadData(searchText, dataLimit)

}

// Show All Button
document.getElementById('show-all-btn').addEventListener('click', function(){

    processSearch()

})


// Search Button
document.getElementById('search-btn').addEventListener('click', function(){

    processSearch(10)
    
})

// Search on Enter Press
document.getElementById('search-field').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        processSearch(10);
    }
})


// Toggle Spinner
const toggleSpinner = idLoading => {

    const loaderSection = document.getElementById('loader')

    if(idLoading){

        loaderSection.classList.remove('hidden')

    }

    else{
        loaderSection.classList.add('hidden')
    }

}

//loadData()