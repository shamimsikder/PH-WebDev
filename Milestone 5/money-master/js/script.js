document.getElementById('calculate').addEventListener('click', function(){

    const income = getInput('income-input-field')
    const clothes = getInput('clothes-input-field')
    const rent = getInput('rent-input-field')
    const food = getInput('food-input-field')

    setBalance(income, food, rent, clothes)

})

document.getElementById('save').addEventListener('click', function(){

    setSaving()

})