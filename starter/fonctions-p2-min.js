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
console.log("/////calcMin/////");
function calcMin(n1, n2) {
    const min = n1 < n2;
    if (min) {
        console.log(n1);
    } else {
        console.log(n2);
    }
    return min;
}

// Utilisation de la fonction calcMin pour calculer le minimum
calcMin(4.5, 5);
calcMin(19, 9);
calcMin(1, 1);

// Version avec une arrow function
console.log("/////calcMinArrow/////");
const calcMinArrow = (x, y) => {
    const min = x < y;
    if (min) {
        console.log(x);
    } else {
        console.log(y);
    }
}

// Utilisation de la fonction calcMinArrow pour calculer le minimum
calcMinArrow(4.5, 5);
calcMinArrow(19, 9);
calcMinArrow(1, 1);

// Version encore plus concise avec une arrow function
console.log("/////calcMinConcise/////");
const calcMinConcise = (a, b) => (a < b) ? a : b;

// Utilisation de la fonction calcMinConcise pour calculer le minimum
console.log(calcMinConcise(4.5, 5));
console.log(calcMinConcise(19, 9));
console.log(calcMinConcise(1, 1));
