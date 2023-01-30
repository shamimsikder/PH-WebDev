function leapYear(n){

    if((n%400 == 0) || (n%4 == 0) && (n%100 != 0)){
        console.log(n +" is leap year");
    }

    else console.log(n +" is not leap year");

}

leapYear(2023);