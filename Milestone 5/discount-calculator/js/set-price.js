
function setPrice(){

    const totalString = document.getElementById('price')
    const totalPrice = document.getElementById('total-price')
    const totalBill = document.getElementById('total-bill')

    const total = parseInt(totalString.innerText)

    totalPrice.innerText = total
    
    totalBill.classList.remove('hidden')

}