const { shopCart, passengers } = require('../data')

//const orderByTotalProducts = shopCart.sort((a, b) => b.quantity - a.quantity)
//console.table(orderByTotalProducts)

const orderByPassengerName = passengers.sort((pa, pb) => {
  if( pa.name.toLowerCase() < pb.name.toLowerCase() ) return -1
  if( pa.name.toLowerCase() > pb.name.toLowerCase() ) return 1
  return 0
})

console.table(orderByPassengerName)