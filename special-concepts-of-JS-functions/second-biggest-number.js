var numbers = [34, 21, 45, 54, 88, 55, 23, 60];
function bigNumber(newArray) {
    numbers.sort(function (a, b) { return b - a });
    return newArray[1];
}

var findLarge = bigNumber(numbers);
console.log(findLarge);
//sorting hoye geche