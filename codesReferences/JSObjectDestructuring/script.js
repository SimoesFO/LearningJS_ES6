/******************************************************
 * Há 3 usos básicos para o Spread Operator
 * - Na chamada de funções
 * - Na iteração de Arrays
 * - Na iteração de Objetos
 ******************************************************/


// SAMPLE 00
console.log("SAMPLE 00 - Get elements from array")
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
const [a1,, c1] = alphabet // Adicionei a cada variávle o elemento correspondente do array.
console.log(a1 +" "+ c1)
const [a,b,,d, ...rest] = alphabet
console.log(a +" "+ b +" "+ d)
console.log(rest)


// SAMPLE 01
console.log("SAMPLE 01 - Function Destructuring of function")
function sumAndMultiply(a, b) {
    return [a+b, a*b, a/b]
}
const [sum, multiply, division = 'No Division'] = sumAndMultiply(3, 5) // Pega o array de retorno de converte em duas váriaveis 
console.log(sum)
console.log(multiply)
console.log(division)


// SAMPLE 02
console.log("SAMPLE 02 - Combining Objects")
const personOne = {
    name: 'kyle',
    age: 24,
    address: {
        city: 'Somewhere',
        state: 'One of them'
    }
}

const personTwo = {
    name: 'Sally',
    favFood: 'Watermelon'
}

console.log(personOne)
console.log(personTwo)

// Destructuring Obejct
const {name: firstName = 'Felipe', age, favFood = 'Rice', address: {city}} = personOne
console.log("Name: "+ firstName +" | Age: "+ age +" | Food: "+ favFood +" | City: "+ city)

// Cria uma terceira pessoa com os dados da pessoa01, porém as informações serão
// sobrescritas pelas informações presentes na pessoa02
const personThree = {...personOne, ...personTwo}
console.log(personThree)


// SAMPLE 03
console.log("SAMPLE 02 - Destructuring Objetcts to Function")
const personFour = {
    name: 'kyle',
    age: 24,
    address: {
        city: 'Somewhere',
        state: 'One of them'
    }
}

function printUser({name = 'Felipe', age, favFood = 'Orange'}) {
    console.log(`Name is: ${name}. Age is: ${age}. Favorite Food is: ${favFood}`)
}

printUser(personFour)