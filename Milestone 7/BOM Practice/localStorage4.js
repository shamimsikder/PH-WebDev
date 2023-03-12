document.getElementById('send-name').addEventListener('click', function(){

    const name = document.getElementById('input-name').value

    localStorage.setItem("Name", name)

})

document.getElementById('send-email').addEventListener('click', function(){

    const email = document.getElementById('input-email').value

    localStorage.setItem("Email", email)

})

document.getElementById('send-message').addEventListener('click', function(){

    const message = document.getElementById('input-message').value

    localStorage.setItem("Message", message)

})

// Delete Functionality

document.getElementById('delete-name').addEventListener('click', function(){

    localStorage.removeItem("Name")

})

document.getElementById('delete-email').addEventListener('click', function(){

    localStorage.removeItem("Email")

})

document.getElementById('delete-message').addEventListener('click', function(){

    localStorage.removeItem("Message")

})

document.getElementById('reset').addEventListener('click', function(){

    const keys = ["Name","Email","Message"]

    keys.forEach(key => {

        localStorage.removeItem(key)

    })

})