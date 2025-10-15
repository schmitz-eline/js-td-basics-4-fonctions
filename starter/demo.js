/*
let userNumber = parseInt(prompt('Entrez un nombre'));
while (isNaN(userNumber)) {
    userNumber = parseInt(prompt('Ce n’est pas un nombre'));
}
*/

function sayHello1 () {
    console.log('Hello!');
}
sayHello1();

// Ou
let direBonjour = function () {
    console.log('Bonjour !');
}
direBonjour();

// Avec 1 paramètre
function sayHello2 (name) {
    console.log(`Hello ${name}!`);
}
sayHello2('Eline');
sayHello2('Juliette');

// Avec return
function sayHello3 (name) {
    if (name === null || name === '') {
        return `'name' vaut null ou ''`;
    }
    return 'Hello ' + name;
}
sayHello3('Eline');