/*
FONCTIONS - PRÉPA 2 : Le minimum de deux nombres
1. En supposant que la fonction JavaScript Math.min() n'existe pas,
   déclarez la fonction calcMin pour qu'elle retourne
   le plus petit des deux nombres passés en paramètres
2. Utilisez ensuite votre fonction pour calculer
   - le minimum entre 4.5 et 5
   - le minimum entre 19 et 9
   - le minimum entre 1 et 1
N.B. Faites deux versions :
   - en utilisant la syntaxe classique
   - en utilisant une arrow function
*/

// Syntaxe classique
function calcMin1(a, b) {
    return a < b ? a : b;
}

// Utilisation de la fonction calcMin pour calculer le minimum
console.log(calcMin1(4.5, 5)); // 4.5
console.log(calcMin1(19, 9)); // 9
console.log(calcMin1(1, 1)); // 1

// Version avec une arrow function
const calcMin2 = (a, b) => {
    return a < b ? a : b;
}

// Utilisation de la fonction calcMinArrow pour calculer le minimum
console.log(calcMin2(4.5, 5)); // 4.5
console.log(calcMin2(19, 9)); // 9
console.log(calcMin2(1, 1)); // 1

// Version encore plus concise avec une arrow function
const calcMin3 = (a, b) => a < b ? a : b;

// Utilisation de la fonction calcMinConcise pour calculer le minimum
console.log(calcMin3(4.5, 5)); // 4.5
console.log(calcMin3(19, 9)); // 9
console.log(calcMin3(1, 1)); // 1