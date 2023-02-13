document.getElementById('withdraw-btn').addEventListener('click', function(){
    
    const newWithdrawAmount = getInputFieldValue('withdraw-field');
    const previousWithdrawTotal = getTextElementValue('withdraw-bal');

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    setTextElementValue('withdraw-bal', newWithdrawAmount);

    const previousBalanceTotal = getTextElementValue('total-bal');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    setTextElementValue('total-bal', newBalanceTotal);

})