function isPalindrome(str){

    str = str.toLowerCase()

    for(let i=0; i<str.length/2; i++){

        if(str[i] !== str[str.length-1-i]){
            return console.log(str + ' is not a palindrome');
        }

    }

    return console.log(str + ' is a palindrome');

}

console.log(isPalindrome("madam"));
console.log(isPalindrome("cat"));

console.log(isPalindrome("class"));
console.log(isPalindrome("lol"));