function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('phone2-input-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;

    if(isIncrease === true){
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 819;
    const caseTotalElement = document.getElementById('phone2-total');
    caseTotalElement.innerText = caseTotalPrice;
} 

document.getElementById('phone2-btn-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);

    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
});

document.getElementById('phone2-btn-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);
    
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
})