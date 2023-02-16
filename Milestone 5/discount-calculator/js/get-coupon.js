function getCoupon(){

    const couponField = document.getElementById('coupon-field')
    
    const couponValueString = couponField.value

    couponField.value = ''

    return couponValueString

}