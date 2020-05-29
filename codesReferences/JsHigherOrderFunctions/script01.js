// CallBack Function
/*
function sing(callback) {
    console.log('la la la')
    if(callback instanceof Function)
        callback()
}

function meow() {
    console.log('meow meow')
}
*/

// Factory Function
function multiplier(factor) {
    return x => x * factor
}

let doubler = multiplier(2)
let tripler = multiplier(3)

console.log( doubler(6) );
console.log( tripler(12) );