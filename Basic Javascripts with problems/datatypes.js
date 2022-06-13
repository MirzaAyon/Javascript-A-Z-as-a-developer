//primitive datatypes - number,string,boolean,null,undefined
//non-premitive datatypes - array, string,linklist

//Data type
//  Primitive data type
// 1. String data type
var firstName = "Mirza";
var lastName = "Ayon";
var fullName = firstName + " " + lastName;
console.log(fullName);


//2.Number data type
var age1 = 30;
var age2 = "40";
var sum = age1 + parseInt(age2);
console.log(sum);


// Boolean Data type
var number1 = 60;
var number2 = 60;
console.log(number1 == number2);

// Undefined data type
var rollNumber;
console.log(typeof rollNumber);


//null Data type 
var x = null;
console.log(x);


//simple calculation
var number1 = 60;
var number2 = 50;

console.log(number1 < number2);
if (number1 < number2) {
    console.log("Number2 is big");
}

//simple calculation 2
var number = 50;

if (number % 2 == 0) {
    console.log("The number is Even/jor");
}

if (number % 2 == 1) {
    console.log("The number is odd/bijor");
}

//simple calculation 3 
var number1 = 200;
var number2 = 100;

if (number1 > number2) {
    console.log("Number1 is big");
}
else {
    console.log("Number1 is small");
}