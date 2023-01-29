for(i=0; i<10; i++){
    console.log(i);
}

for(i=1; i<=10; i++){
    for(j=1; j<=10; j++){

        console.log(i + "X" + j + "=" + (i*j));

    }
}

var str = "Hello JS";

for(i=0; i<str.length; i++){
    console.log(str[i]);
}

for(i=0; i<str.length; i++){
    console.log(str[i]);
    if(str[i] == " "){
        break;
    }
}
