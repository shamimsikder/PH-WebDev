document.getElementById('deposit-btn').addEventListener('click', function(){

    const newDepositAmount = getInputFieldValue('deposit-field');
    const previousDepositAmount = getTextElementValue('deposit-bal');

    const newDepositTotal = newDepositAmount + previousDepositAmount;

    setTextElementValue('deposit-bal', newDepositTotal);

    const previousBalanceTotal = getTextElementValue('total-bal');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    setTextElementValue('total-bal', newBalanceTotal);

})