const seconds = document.getElementById('seconds');
const tens = document.getElementById('tens');
let s = 00;
let t = 00;
let interval;

document.getElementById('start').addEventListener('click', function(){

    clearInterval(interval);
    interval = setInterval(startTimer, 10);

})

document.getElementById('stop').addEventListener('click', function(){

    clearInterval(interval);

})

document.getElementById('reset').addEventListener('click', function(){

    clearInterval(interval);
    
    t = "00";
  	s = "00";
    tens.innerHTML = t;
  	seconds.innerHTML = s;

})


function startTimer () {
    t++; 
    
    if(t <= 9){
      tens.innerHTML = "0" + t;
    }
    
    if (t > 9){
      tens.innerHTML = t;
      
    } 
    
    if (t > 99) {
      console.log("seconds");
      s++;
      seconds.innerHTML = "0" + s;
      t = 0;
      tens.innerHTML = "0" + 0;
    }
    
    if (s > 9){
      seconds.innerHTML = s;
    }
  
  }