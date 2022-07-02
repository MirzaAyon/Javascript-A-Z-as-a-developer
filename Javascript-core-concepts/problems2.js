// no. 3
//Calculate the sum of salaries within an array of object
var persons = [
    { name: 'karim', salary: 10000 },
    { name: 'rahim', salary: 12000 },
    { name: 'deloyar', salary: 2000 },
    { name: 'babul', salary: 20000 },
];
var sum = 0;
for (var i = 0; i < persons.length; i++) {
    sum = sum + persons[i].salary
}
console.log(sum)

// no. 4
// Write a JavaScript program to check whether a given integer is within 20 of 100
function isPresent(number) {
    for (var i = 20; i < 100; i++) {
        if (i == number) {
            console.log('present', i)
        }
    }
}
isPresent(551);