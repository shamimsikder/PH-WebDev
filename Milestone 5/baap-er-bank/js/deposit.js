const depositButton = document.getElementById('deposit-btn');

depositButton.addEventListener('click', function(){

    const depositBalance = document.getElementById('deposit-bal');
    const depositField = document.getElementById('deposit-field');
    const depositTotal = document.getElementById('total-bal')

    // Deposit Balance
    let newDepositAmountString = depositField.value
    let newDepositAmount = parseFloat(newDepositAmountString)

    let previousDepositTotalString = depositBalance.innerText
    let previousDepositTotal = parseFloat(previousDepositTotalString)

    let totalDeposit = newDepositAmount + previousDepositTotal

    depositBalance.innerText = parseFloat(totalDeposit)

    // Total Balance
    let previousBalanceTotalString = depositTotal.innerText
    let previousBalanceTotal = parseFloat(previousBalanceTotalString)

    let totalBalance = previousBalanceTotal + newDepositAmount

    depositTotal.innerText = totalBalance

    depositField.value = '';

})