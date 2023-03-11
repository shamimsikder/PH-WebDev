let count = localStorage.getItem('Count') || 0;

document.getElementById('btn').addEventListener('click', function(){

    count++;

    document.getElementById('text').innerText = count

})

window.addEventListener('unload', function(){

    localStorage.setItem('Count', count)

})

document.getElementById('text').innerText = count;
