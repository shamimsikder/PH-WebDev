function setBalance(income,food,rent,clothes){

    const totalExpenseField = document.getElementById('total-expenses')
    const balanceField = document.getElementById('balance')

    const totalExpenses = (food+rent+clothes);
    const balance = income - totalExpenses;

    totalExpenseField.innerText = totalExpenses;
    balanceField.innerText = balance;

}

function setSaving(){

    const savingField = document.getElementById('saving-amount')
    const remainingField = document.getElementById('remaining-amount')

    const percentage = getInput('save-input-field')
    const income = getInput('income-input-field')

    const savingAmount = income * (percentage/100)

    const balanceString = document.getElementById('balance') 
    const balance = parseInt(balanceString.innerText)

    const remainingBalance = balance - savingAmount

    savingField.innerText = savingAmount
    remainingField.innerText = remainingBalance

    console.log(remainingBalance)
    console.log(balance)

}