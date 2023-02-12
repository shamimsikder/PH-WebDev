const withdrawButton = document.getElementById('withdraw-btn')

withdrawButton.addEventListener('click', function(){

    const withdrawField = document.getElementById('withdraw-field')
    const withdrawBalance = document.getElementById('withdraw-bal')
    const currentTotal = document.getElementById('total-bal')

    // Withdraw Balance

    let newWithdrawAmountString = withdrawField.value
    let newWithdrawAmount = parseFloat(newWithdrawAmountString)

    let previousWithdrawAmountString = withdrawBalance.innerText
    let previousWithdrawAmount = parseFloat(previousWithdrawAmountString)

    let withdrawTotal = newWithdrawAmount + previousWithdrawAmount

    withdrawBalance.innerText = withdrawTotal

    // Total Balance

    let previousBalanceTotalString = currentTotal.innerText
    let previousBalanceTotal = parseFloat(previousBalanceTotalString)

    let currentTotalBalance = previousBalanceTotal - newWithdrawAmount

    currentTotal.innerText = parseFloat(currentTotalBalance)

    withdrawField.value = '';

})