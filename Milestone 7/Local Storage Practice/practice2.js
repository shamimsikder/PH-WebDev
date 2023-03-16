let data = []
let input = document.getElementById('input')

document.getElementById('input').addEventListener('keypress', function(e){

    if(e.key === 'Enter'){

        addData(input)

    }

})

document.getElementById('btn').addEventListener('click', function(e){

    addData(input)

})

const addData = (input) => {

    const list = document.getElementById('list')

    data.push(input.value)

    localStorage.setItem("data", JSON.stringify(data))

    list.innerHTML += `
    
        <li>${input.value}</input>
    
    `

    input.value = ''

}

const oldData = () => {

    const get = localStorage.getItem('data')

    if(get){

        const oldData = JSON.parse(get)

        for(const item of oldData){

            data.push(item)

            document.getElementById('list').innerHTML += `<li>${item}</input>`

        }

    }

}

oldData()