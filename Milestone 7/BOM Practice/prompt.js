document.getElementById('btn').addEventListener('click', function(){

    const num = prompt("Enter any Number")

    const result = parseInt(num) + 200

    document.getElementById('result').innerHTML = result

    alert("Result: "+result)

})