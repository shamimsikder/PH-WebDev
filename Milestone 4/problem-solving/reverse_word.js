function reverseBySeparator(str, separator){

    return str.split(separator).reverse().join(separator);

}

let string1 = "Welcome to this Javascript Guide!";

let reverseSentence1 = reverseBySeparator(string1, "");

let reverseWord1 = reverseBySeparator(reverseSentence1, " ");

console.log(reverseWord1);

let string2 = "emocleW ot siht tpircsavaJ !ediuG";

let reverseSentence2 = reverseBySeparator(string2, "");

let reverseWord2 = reverseBySeparator(reverseSentence2, " ");

console.log(reverseWord2);

let string3 = "enigamI snogarD - I teB yM efiL";

let reverseSentence3 = reverseBySeparator(string3, "");

let reverseWord3 = reverseBySeparator(reverseSentence3, " ");

console.log(reverseWord3);