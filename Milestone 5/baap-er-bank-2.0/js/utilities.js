function getInputFieldValue(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);

    inputField.value = '';
    
    return inputFieldValue;
}

function getTextElementValue(element){
    const textElement = document.getElementById(element);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);

    return textElementValue;
}

function setTextElementValue(elementId, newValue){
    const textElement = document.getElementById(elementId);
    return textElement.innerText = newValue;
}