const { animals } = require('../data')

var names = animals.map(animal => {
    return animal.name + " this is "+ animal.species
})
console.table(names)