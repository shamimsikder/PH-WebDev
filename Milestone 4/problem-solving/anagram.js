function isAnagram(str1, str2){

    let a = str1.toLowerCase();
    let b = str2.toLowerCase();

    a = a.split("").sort().join();
    b = b.split("").sort().join();

    if(a === b) return console.log(str1 +" is anagram of "+ str2);

    else return console.log(str1 +" is not anagram of "+ str2);

};

let string1 = "Mary";
let string2 = "Army";

isAnagram(string1, string2);

