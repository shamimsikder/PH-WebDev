let items = []
const input = document.getElementById('input')

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

    items.push(input.value)
    
    //console.log(items)
    localStorage.setItem("items", items)

    list.innerHTML += `
    
        <li>${input.value}</li>
    
    `

    input.value = ""

}


