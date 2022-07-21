var numbers = [243, 432, 545, 323, 54];
//0  1  2    3   4
//              1, 2,   3,  4, 5
console.log(numbers.length);
console.log(numbers[0]);
last_itemIndex = numbers.length - 1
console.log(last_itemIndex)

console.log(numbers.length);

console.log(numbers[numbers.length - 1])
console.log(numbers[numbers.length])
// numbers.length = 5

// numbers[0]



function printAllArrayNumbers(numbersArray) {
    console.log(numbersArray.length);
    for (var index = 0; index < numbers.length; index++) {
        console.log(numbersArray[index]);
        console.log(numbersArray[index], index);
    }
}
printAllArrayNumbers(numbers);
printAllArrayNumbers([234, 545, 323, 5454, 23, 45, 23, 124, 1343]);