var x = 72;
var y = 60;

var gcd;

for(i=1; i<=x && i<=y; i++){

    if(x%i == 0 && y%i == 0){

        gcd = i;

    }

}

console.log('GCD of '+ x +' and '+ y +' is '+ gcd);