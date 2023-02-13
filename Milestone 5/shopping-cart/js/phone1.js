function updatePhoneNumber (isIncrease){
    const phoneNumberField = document.getElementById('phone1-input-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;

    if(isIncrease){
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;
    
    return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1019;
    const phoneTotalElement = document.getElementById('phone1-total');
    phoneTotalElement.innerText = phoneTotalPrice;
}


document.getElementById('phone1-btn-plus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true);
    
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
    

});

document.getElementById('phone1-btn-minus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(false);

    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
})