//3. Write a function for a food delivery service that sells 'pizza' only. Each pizza costs 10$. This function takes the food name & quantity as parameter and then return a custom message with order info. This function should be smart enough to handle wrong parameter inputs.

function pizzaPanda(foodName, quantity) {
    if (foodName.toLowerCase() != 'pizza') {
        return 'Sorry, we sell Pizza only.'
    } else if (quantity < 0) {
        return 'Sorry, use positive number'
    } else if (quantity > 10) {
        return 'Sorry, 10 pizza left'
    }

    var price = 10 * quantity
    var message =
        'Order successful!, Order info: ' + foodName + ', Price: ' + price + '$'
    return message
}

console.log(pizzaPanda('Pizza', 10))