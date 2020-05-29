const { passengers } = require('../data')

passengers.forEach(passenger => {
    let yearCurrent = new Date().getFullYear()
    passenger.age = yearCurrent - passenger.birthYear
})

console.table(passengers)