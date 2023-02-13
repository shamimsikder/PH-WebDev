const loginButton = document.getElementById('login-btn');

loginButton.addEventListener('click', function (){

    const passwordField = document.getElementById('password');
    const usernameField = document.getElementById('username');

    const username = usernameField.value;
    const password = passwordField.value;



    if(username === 'shakib' && password === 'hungkar'){
        window.location.href = 'bank.html';
    }

    else{
        alert('You have entered  invalid password or username');
    }

    usernameField.value = '';
    passwordField.value = '';

})