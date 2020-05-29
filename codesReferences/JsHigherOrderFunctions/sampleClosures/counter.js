// Criando um contador e emulando métodos privados.

var makeCounter = function() {
    var privateCounter = 0

    function changeBy(val) {
        privateCounter += val
    }

    return {
        increment: function() {
            changeBy(1)
        },
        decrement: function() {
            changeBy(-1)
        },
        value: function() {
            return privateCounter;
        }
    }
}

var Counter01 = makeCounter()
var Counter02 = makeCounter()

console.log("Counter01: "+Counter01.value())
Counter01.increment();
Counter01.increment();
Counter01.increment();
console.log("Counter01: "+Counter01.value())
Counter01.decrement()
console.log("Counter01: "+Counter01.value())
console.log("Counter02: "+Counter02.value())

//Counter01.changeBy(5); // Gera um error, pois este método é privado.
console.log(Counter01.privateCounter) // Retorna 'undefined', pois o privateCounter é privado. Não gera error.
Counter01.privateCounter = 7 // Cria um novo atributo 'privateCounter', porém em escopo separado. De forma que não interfere no contador privado.
console.log(Counter01)

var private = Counter01.value() + 3; // Não altera o privateCounter
console.log(private);