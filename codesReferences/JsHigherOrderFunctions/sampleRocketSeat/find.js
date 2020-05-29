const { passengers } = require('../data')

const Enzo = passengers.find( passenger => passenger.name.toLowerCase() === 'enzo' )
console.table(Enzo);