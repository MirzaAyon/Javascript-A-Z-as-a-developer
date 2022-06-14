// 1. কোনো একটা লেটার vowel কিনা তা নির্ণয় করা যায় কিভাবে ?
var input = "z";
var letter = input.toLowerCase();
if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
    console.log(letter, "is vowel");
}
else {
    console.log(letter, "is not vowel");
}