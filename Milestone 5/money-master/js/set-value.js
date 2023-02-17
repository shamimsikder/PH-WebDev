function setBalance(income,food,rent,clothes){

    const totalExpenseField = document.getElementById('total-expenses')
    const balanceField = document.getElementById('balance')

    const totalExpenses = (food+rent+clothes);
    const balance = income - totalExpenses;

    totalExpenseField.innerText = totalExpenses;
    balanceField.innerText = balance;

}