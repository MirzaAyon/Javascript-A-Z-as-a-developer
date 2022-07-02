// no. 1
// print all even numbers from 0 -10

for (var i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

//No - 2
function posNeg(num1, num2) {
    if (num1 > 0 && num2 < 0) {
        console.log('correct input');
    }
    else {
        console.log('incorrect input')
    }
}
posNeg(3, 8)
posNeg(3, -8)