const { animals } = require('../data')
/*
var dogs = [];
animals.forEach(animal => {
    if(animal.species == 'dog')
        dogs.push(animal);
})
console.log(dogs);
*/

var isDog = animal => animal.species === 'dog'
var dogs = animals.filter(isDog)
console.log(dogs)