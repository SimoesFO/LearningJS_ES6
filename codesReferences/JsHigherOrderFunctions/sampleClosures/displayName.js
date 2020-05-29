// São funções que lembram do ambiente em que foram criadas.
// Por exemplo, irão lembrar de todas as váriaveis e outras funções que existiam no contexto,
// quando foram criardas.

// Without Closures
function init() {
    var name = "Felipe"
    function displayName() {
        console.log(name)
    }

    displayName()
}
init()

// With Closures
function makeFunc() {
    var name = "Simões"
    function displayName() {
        console.log(name)
    }

    return displayName 
}
var myFunc = makeFunc() // Atention: Return the Function, but remenber the variable name
myFunc()

