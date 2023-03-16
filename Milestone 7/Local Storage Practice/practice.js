let items = []
const list = document.getElementById('list');

document.getElementById('btn').addEventListener('click', function(){

    const input = document.getElementById('input')
    addList(input)

})

document.getElementById('input').addEventListener('keypress', function(e){

   if(e.key === 'Enter'){

        const input = document.getElementById('input')
        addList(input)
        
   }

})

const addList = (input) => {

    items.push(input.value)
    
    localStorage.setItem("items", JSON.stringify(items))

    list.innerHTML += `
    
    <li>${input.value}</li>
    
    `

    input.value = ""

}

const showOldData = () => {

    const get = localStorage.getItem('items');

    if (get) {

        const oldItems = JSON.parse(get);

        for (const item of oldItems) {

            items.push(item);

            list.innerHTML += `<li>${item}</li>`;
        
        }
    }
};

showOldData();