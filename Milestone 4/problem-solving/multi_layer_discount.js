function ticketPrice(tickets){

    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;

    if(tickets <= 100) return tickets * first100Rate;

    else if (tickets > 100 && tickets <= 200) return (100 * first100Rate) + ((tickets - 100) * second100Rate);

    else return (100 * first100Rate) + (100 * second100Rate) + ((tickets - 200) * restTicketRate);

}

console.log(ticketPrice(100))
console.log(ticketPrice(120))
console.log(ticketPrice(300))