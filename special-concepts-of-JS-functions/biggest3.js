var numbers = [34, 21, 45, 54, 88, 55, 23, 60];
function bigNumber(newArray) {
    numbers.sort(function (a, b) { return b - a });
    console.log(newArray);
    console.log(newArray[0]);
}

bigNumber(numbers);
//sorting hoye geche