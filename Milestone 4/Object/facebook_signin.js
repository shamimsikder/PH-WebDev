let database = [

    {
        username: "Shamim",
        password: "supersecret"
    }

];

let newsFeed = [

    {
        username: 'Pintu',
        timeline: 'JavaScript is so cool!'
    },
    {
        username: "Montu",
        timeline: "So, tired from all that learning!"
    }

];

function signIn(user, pass){

    if(user === database[0].username && pass === database[0].password){
        console.log(newsFeed);
    }

    else console.log("Sorry, wrong username or password!!");

}

let name1 = "Shamim";
let pass1 = "supersecret";

let name2 = "Montu";
let pass2 = "super";

signIn(name1, pass1);
signIn(name2, pass2);


