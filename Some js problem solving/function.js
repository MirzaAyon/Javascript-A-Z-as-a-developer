function isPositive(number) {
    let result;
    if (number > 0) {
        result = "positive";
    } else {
        result = "negative";
    }
    return result;
}

const output = isPositive(3)
console.log(output);
