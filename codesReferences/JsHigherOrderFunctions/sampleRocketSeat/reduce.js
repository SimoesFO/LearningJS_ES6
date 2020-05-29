const { shopCart } = require('../data')

/*
const totalValue = shopCart.reduce((accumulator, item) => {
    return accumulator + item.quantity * item.unitPrice
}, 0)

console.log(totalValue);
*/

const totalProducts = shopCart.reduce((accumulator, item) => {
    return accumulator + item.quantity
}, 0)

console.log(totalProducts)