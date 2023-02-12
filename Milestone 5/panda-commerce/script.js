const h1 = document.getElementsByTagName('h1')

for(let i of h1){
    i.style.color = 'lightblue'
}

const backpack = document.getElementById('backpack')

backpack.style.backgroundColor = 'tomato'

const click = document.getElementById('click-handler')

click.onclick = function clickHandler (){
    console.log('Click Handler')
}

// Task - 6

const buyBtn = document.getElementsByClassName('buy-btn');

for(let i of buyBtn){

    i.addEventListener('click', function(){
        const cardHandler = document.getElementsByClassName('card-handler')

        for(let j of cardHandler){

            j.style.display = 'none';

        }

    })

}

// Task - 7

document.getElementById('active-text').addEventListener('keyup', function(event){

    const text = event.target.value;
    const activeBtn = document.getElementById('active-btn');

    if(text === 'email'){
        activeBtn.removeAttribute('disabled');
    }
    else{
        activeBtn.setAttribute('disabled', true);;
    }

})

// Task - 8

const myImg = document.getElementById('my-img');

myImg.addEventListener('mouseenter', function(){

    myImg.src = './images/categories/bag.png'

})

// Task - 9

const section = document.getElementById('my-section')

section.addEventListener('dblclick',function(){

    section.style.backgroundColor = 'yellowgreen'

})