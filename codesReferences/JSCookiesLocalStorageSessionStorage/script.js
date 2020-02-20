// LOCAL STORAGE
// Mantém as informações enquanto o browser estiver aberto.
// É possível acessa a informação em várias abas, desde que estejam no mesmo domínio.
console.log("LOCAL STORAGE");
localStorage.setItem('name', 'Felipe') // Pode comentar que continuará armazenada.
console.log(localStorage.getItem('name'))
localStorage.setItem('lastname', 'Simões') // Pode comentar que continuará armazenada.
console.log(localStorage.getItem('lastname'))
localStorage.removeItem('name');
console.log(localStorage.getItem('name'))
console.log(localStorage.getItem('lastname'))


// SESSION STORAGE
// Mantém as informações armazenadas enquanto a aba (tab) estiver aberta.
// NÃO é possível acessar em outra aba (tab).
console.log("SESSION STORAGE")
sessionStorage.setItem('favAnimal', 'dogs') // Pode comentar que continuará armazenada.
console.log(sessionStorage.getItem('favAnimal'))
sessionStorage.setItem('favFood', 'hamburguer') // Pode comentar que continuará armazenada.
console.log(sessionStorage.getItem('favFood'))
sessionStorage.removeItem('favAnimal')
console.log(sessionStorage.getItem('favAnimal'))
console.log(sessionStorage.getItem('favFood'))


// COOKIES
console.log("COOKIES")
document.cookie = 'name=Felipe; expires='+ new Date(2020, 10, 26).toUTCString
document.cookie = 'lastName=Felipe; expires='+ new Date(2020, 0, 1).toUTCString
console.log(document.cookie)
