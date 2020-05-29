function multiplier(x) {
    return (y) => x * y
}

var doubler = multiplier(2)
var tripler = multiplier(3)

console.log( doubler(4) )
console.log( tripler(4) )