const { passengers } = require('../data')

/*
const newPassengers = passengers.map( passenger => {
    let yearCurrente = new Date().getFullYear();
    return `${passenger.name} tem ${ yearCurrente - passenger.birthYear} anos`
})

console.table(newPassengers)
*/

// Palindromo
const founds = passengers.map(passenger => {
    const reverseName = [].map.call(passenger.name, letter => letter).reverse().join('').toLowerCase()
    
    if( reverseName === passenger.name.toLowerCase() ) return `This is palindromo ${passenger.name}`

    return 'This is not palindromo'
})

console.table(founds)