// setting default parameter value

function interest(principal, rate, year){

    rate = rate || 3.5;
    year = year || 5;

    return principal * rate / 100 * year;

}

console.log(interest(10000));

console.log(interest(10000, 4.5));

console.log(interest(10000, 4.5, 3));