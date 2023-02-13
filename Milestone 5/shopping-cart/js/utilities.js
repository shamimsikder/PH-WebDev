function getTextElementById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentTotalPhoneString = phoneTotalElement.innerText;
    const currentTotalPhone = parseInt(currentTotalPhoneString);

    return currentTotalPhone;
}

function setTextValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal(){
    const currentPhone1Total = getTextElementById('phone1-total')
    const currentPhone2Total = getTextElementById('phone2-total')

    const currentSubTotal = currentPhone1Total + currentPhone2Total;
    setTextValueById('subtotal', currentSubTotal);

    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextValueById('tax', taxAmount);

    const total = currentSubTotal + taxAmount;
    setTextValueById('total', total);
}