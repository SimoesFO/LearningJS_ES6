data = [
    {
        name: 'Butters',
        age: 3,
        type: 'dog'
    },
    {
        name: 'Lizzy',
        age: 6,
        type: 'dog'
    },
    {
        name: 'Red',
        age: 1,
        type: 'cat'
    },
    {
        name: 'Joey',
        age: 3,
        type: 'dog'
    },
];


// Itera sobre cada elemento, executando uma função. Mas não retornar um novo array.
console.log("FOREACH")
let forEach01 = Array()
data.forEach(animal => {
   forEach01.push(animal.age * 7)
})
console.log(data)
console.log(forEach01)


// Itera sobre cada elemento, executando uma função, e ao final retorna um novo array
// com as alterações executadas.
console.log("MAP")
let map01 = data.map(animal => {
    return animal.age * 7
})
console.log(data)
console.log(map01)

// Filtra dentro de um array valores que correspondam a determinada condição de uma função.
// Retorna um novo array/objeto contendo todos os elementos "verdadeiros"
console.log("FILTER")
let dogs = data.filter(animal => {
    return animal.type === 'dog'
})
console.log(data)
console.log(dogs)

// Busca dentro de um array/objeto o PRIMEIRO valor que corresponde a determinada condição de uma função.
// Retorna apenas um elemento do array.
console.log("FIND")
let dog = data.find(animal => {
    return animal.type === 'dog'
})
console.log(data)
console.log(dog)


// Retorna Verdadeiro se TODOS os animais tiverem idades acima de 3 anos.
console.log("EVERY")
let booleanAge = data.every(animal => {
    return animal.age >= 3
})
console.log(booleanAge);


// Soma todas as idades dos animais.
console.log("REDUCE")
let sumAge = data.reduce( (accumulator, animal) => {
    return accumulator + animal.age
}, 0)
console.log(data)
console.log(sumAge)

// Soma todas as idades "reais" (idade * 7) de todos animais, que estejam acima de 10 anos
console.log("CONCAT METHOD")
let result = data
    .map( animal => (animal.age * 7) )
    .filter( age => (age > 10) )
    .reduce( (accumulator, currentValue) => accumulator + currentValue )
console.log(result)