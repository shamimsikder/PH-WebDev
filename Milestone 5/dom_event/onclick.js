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