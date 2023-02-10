// Option - 1

function makeOrange(){
    document.body.style.backgroundColor = 'orange';
}

// Option - 2

const makeSeaGreenBtn = document.getElementById('make-seagreen');
makeSeaGreenBtn.onclick = makeSeaGreen;

function makeSeaGreen(){
    document.body.style.backgroundColor = 'seagreen'
}

// Option - 3

const makeYellowGreenBtn = document.getElementById('make-yellowgreen');

makeYellowGreenBtn.onclick = function makeYellowGreen(){
    document.body.style.backgroundColor = 'yellowgreen'
}

// option - 4

const makeCyanBtn = document.getElementById('make-cyan');

makeCyanBtn.addEventListener('click', makeCyan)

function makeCyan(){
    document.body.style.backgroundColor = 'cyan';
}

// option - 4.2

const makeCoralBtn = document.getElementById('make-coral');

makeCoralBtn.addEventListener('click', function makeCoral(){
    document.body.style.backgroundColor = 'coral';
})