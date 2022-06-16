let a = 3,
    b = 2,
    c = 4;

if (a > b) {
    if (a > c) {
        console.log("a is largest");
    }
} else if (c > b) {
    console.log("c is largest");
} else {
    console.log("b is largest");
}
console.log("finished");
//solution is wrong