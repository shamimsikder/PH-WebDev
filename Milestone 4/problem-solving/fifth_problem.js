function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems){

    if(typeof firstFriendGems !== 'number' || typeof secondFriendGems !== 'number' || typeof thirdFriendGems !== 'number'){
        return 'Please Enter A Number For All Input Value';
    }

    let firstFriendGemsPower = 21;
    let secondFriendGemsPower = 32;
    let thirdFriendGemsPower = 43;

    let totalDiamond = (firstFriendGems * firstFriendGemsPower) + (secondFriendGems * secondFriendGemsPower) + (thirdFriendGems * thirdFriendGemsPower);

    if(totalDiamond > 2000){
        return totalDiamond - 2000;
    }

    else{
        return totalDiamond
    }

}

console.log(gemsToDiamond(1,1,1))
console.log(gemsToDiamond(14,20,24))