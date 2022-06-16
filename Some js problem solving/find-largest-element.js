let arr = [3, 6, 2, 56, 32, 5, 89, 32];
let largest = arr[0];

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (element > largest) {
        // what this line means?
        largest = element;
    }

}

console.log(largest);