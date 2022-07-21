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

for (var index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
    console.log(numbers[index], index);
}