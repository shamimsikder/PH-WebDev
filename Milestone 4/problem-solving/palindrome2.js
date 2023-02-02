function reverseString(string){

    let lowString = string.toLowerCase();

    return lowString.split('').reverse().join('');

};

function isPalindrome(str1){

    let str2 = reverseString(str1);

    str1 = str1.toLowerCase();

    if(str2 === str1){
        return console.log("Palindrome");
    }

    else {
       return console.log("Not Palindrome");
    }

};

console.log(isPalindrome("cat"));
console.log(isPalindrome("Madam"));
console.log(isPalindrome("LoL"));