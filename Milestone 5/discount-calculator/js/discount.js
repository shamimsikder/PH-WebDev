document.getElementById('buy-btn').addEventListener('click', function(){

    getPrice('product1-price')
    setPrice()

})

document.getElementById('buy2-btn').addEventListener('click', function(){

    getPrice('product2-price')
    setPrice()

})

document.getElementById('coupon-btn').addEventListener('click', function(){

    const couponText = document.getElementById('coupon-discount')
    const coupon = document.getElementById('coupon')
    const totalString = document.getElementById('price')
    const totalPrice = document.getElementById('total-price')
    
    const total = parseInt(totalString.innerText)

    const couponString = getCoupon()

    if(couponString.toLowerCase() === "love30"){

        const couponValue = parseInt(couponString.match(/(\d+)/))

        const result = (total)*(couponValue/100)

        couponText.innerText = result

        totalPrice.innerText = total - result

        coupon.classList.remove('hidden')

    }

    else{
        alert("wrong Coupon Code")
    }
    
})

