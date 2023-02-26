const loadData = async(searchText) => {

    try{

        const URL = `https://openapi.programming-hero.com/api/phones?search=${searchText}`

        const res = await fetch(URL)
        const data = await res.json()

        showData(data.data)

    }

    catch(err){

        console.log(err)

    }

}

const showData = (phones) => {

    const container = document.getElementById('data-container')

    container.textContent = ''

    phones.slice(0, 10).forEach((phone) => {
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

}



document.getElementById('search-btn').addEventListener('click', function(){

    const search = document.getElementById('search-field')
    const searchText = search.value

    loadData(searchText)
    

})



//loadData()