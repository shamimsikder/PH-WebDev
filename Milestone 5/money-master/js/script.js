document.getElementById('calculate').addEventListener('click', function(){

    const income = getInput('income-input-field')
    const clothes = getInput('clothes-input-field')
    const rent = getInput('rent-input-field')
    const food = getInput('food-input-field')

    if(income < 0 || rent < 0 || food < 0 || clothes < 0){
        alert("Enter Positive Value")
    }

    else{
        setBalance(income, food, rent, clothes)
    }

})

document.getElementById('save').addEventListener('click', function(){

    setSaving()

})