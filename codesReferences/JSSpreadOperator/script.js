/******************************************************
 * Há 3 usos básicos para o Spread Operator
 * - Na chamada de funções
 * - Na iteração de Arrays
 * - Na iteração de Objetos
 ******************************************************/


// SAMPLE 01
console.log("SAMPLE 01 - functions call")
let minValue = Math.min(45, 23, 17, -3, 283, 38)
console.log(minValue)

const temperatures = [45, 23, 17, -3, 283, 38]
minValue = Math.min(temperatures)
console.log(minValue)

minValue = Math.min(...temperatures)
console.log(minValue)


// SAMPLE 02
console.log("SAMPLE 02 - functions call")
console.log("Sua fruta favorita: ", "Manga") // Imprime como uma string
console.log("Sua fruta favorita: ", ..."Manga") // Imprime um caracter por vez


// SAMPLE 03
console.log("SAMPLE 03 - merge array")
const parents = ['João', 'Maria']
const kids = ['pedro', 'joana', 'alice']
const dogs = ['Cerberus', 'K9']

let fullFamily = [parents, kids]
console.log(fullFamily)

let fullFamily2 = [...parents, ...kids]
console.log(fullFamily2)

let fullFamily3 = [...parents, ...kids, 'EU!', ...dogs, 'Tartaruga sem Nome']
console.log(fullFamily3)

// SAMPLE 04
console.log("SAMPLE 04 - copiar um array")
const originals = ['Mona Lisa', 'American Gothic', 'The School of Athens']
const copies = originals; // Cria referência. Dessa forma modificando o original
copies.push("Nighthawks")
console.log(originals)
console.log(copies)

const originals2 = ['Mona Lisa', 'American Gothic', 'The School of Athens']
const copies2 = [...originals2] // Cria um NOVO, não mantém referência. Não modifica o original.
copies2.push("Nighthawks")
console.log(originals2)
console.log(copies2)



