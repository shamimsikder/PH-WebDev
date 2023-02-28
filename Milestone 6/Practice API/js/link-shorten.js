function getLink(){

    const link = document.getElementById('input-field')
    
    const linkValue = link.value

    return linkValue

}

document.getElementById('submit').addEventListener('click', function(){

    const link = getLink()

    loadData(link)
    
})

const loadData = async(link) => {

    const URL = `https://api.shrtco.de/v2/shorten?url=${link}`

    const res = await fetch(URL)
    const data = await res.json()

    showData(data.result.short_link)

}

const showData = (link) => {

    console.log(link)

    const lists = document.getElementById('lists')

    const li = document.createElement('li')

    li.innerHTML = `${link}`

    lists.appendChild(li)

}

loadData()