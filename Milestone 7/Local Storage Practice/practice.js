document.getElementById('btn').addEventListener('click', function(){

    addList()

})

document.getElementById('input').addEventListener('keypress', function(e){

   if(e.key === 'Enter'){

        addList()

   }

})

const addList = () => {

    const input = document.getElementById('input')

    const list = document.getElementById('list')

    list.innerHTML += `
    
        <li>${input.value}</li>
    
    `

    input.value = ""

}