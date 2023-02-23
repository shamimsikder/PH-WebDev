document.getElementById('load-btn').addEventListener('click', function(){

    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => displayData(json))


    function displayData(data){

        const dataShow = document.getElementById('load-data')
        
        dataShow.innerText = data.title

    }

})


