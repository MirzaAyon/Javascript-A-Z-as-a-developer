// 5. একটা লুপ এর সাহায্যে ৭ ঘরের নামতা লিখো 
var number = 5;
for (var i = 1; i <= 10; i++) {
    var result = i * number;
    var multiplicationTable = number + " * " + i + " = " + result;
    console.log(multiplicationTable);
}