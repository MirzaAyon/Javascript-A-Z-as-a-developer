// 2. তিনটি সংখ্যার মধ্যে বড়ো সংখ্যাটি বের কর 
// for own practice=>তিনটি সংখ্যার মধ্যে ছোট  সংখ্যাটি বের কর
var number1 = 1000;
var number2 = 6000;
var number3 = 7000;

if (number1 > number2) {
    if (number1 > number3) {
        console.log("Number1 is big");
    }
}
else if (number2 > number3) {
    if (number2 > number1) {
        console.log("Number2 is big");
    }
}
else {
    console.log("Number3 is big");
}