/*****************************
 * 020 - Fonctions - Préalable
 */

// 3. PORTEE D'UNE VARIABLE : VARIABLE LOCALE - VARIABLE GLOBALE

// 3. - 2°) Variable globale 

/* 
Variable globale = variable déclarée en dehors d'une fonction
Une variable globale est accessible de partout
=> On peut voir une variable globale comme un
   2e MOYEN DE COMMUNICATION entre les fonctions :
   VARIABLE GLOBALE = MOYEN DE PARTAGER LES INFOS ENTRE PLUSIEURS FONCTIONS
   (rendre une info disponible partout)
 */

// EXERCICE 1 : Variable locale
// 1°) Déclarer une fonction affiche1 qui
//    - stocke la valeur 2 dans une variable nbre1
// 2°) Déclarer une fonction affiche2 qui
//    - stocke la valeur 3 dans une variable nbre2
//    - donne l'ordre d'afficher dans la console "Dans affiche2 : nbre2 =  "
//    - donne l'ordre d'afficher dans la console "Dans affiche2 : nbre1 =  "
// 3°) Appeler affiche2
// 4°) Expliquer ce qui se passe

function affiche1ex1() {
    const n1ex1 = 2;
}
function affiche2ex1() {
    const n2ex1 = 3;
    console.log(`Dans affiche2 : n2 = ${n2ex1}`);
    console.log(`Dans affiche2 : n1 = ${n1ex1}`); // Error : n1ex1 is not defined
}
//affiche2ex1();

// EXERCICE 2 : Variable globale
// (on sort la variable nbre1 de la fonction affiche1)
// 1°) Initialiser une variable nbre1 à la valeur 2
// 2°) Déclarer une fonction affiche1 qui
//    - donne l'ordre d'afficher dans la console "Dans affiche1 : nbre1 =  "
// 3°) Déclarer une fonction affiche2 qui
//    - stocke la valeur 3 dans une variable nbre2
//    - donne l'ordre d'afficher dans la console "Dans affiche2 : nbre2 =  "
//    - donne l'ordre d'afficher dans la console "Dans affiche2 : nbre1 =  "
// 4°) Appeler affiche1 et affiche2
// 5°) Expliquer ce qui se passe

const n1ex2 = 2;
function affiche1ex2() {
    console.log(`Dans affiche1 : n1 = ${n1ex2}`);
}
function affiche2ex2() {
    const n2ex2 = 3;
    console.log(`Dans affiche2 : n2 = ${n2ex2}`);
    console.log(`Dans affiche2 : n1 = ${n1ex2}`);
}
affiche1ex2();
affiche2ex2();

// EXERCICE 3 : Variable globale - variante
// (on déclare la variable nbre1 hors de la fonction affiche1 et on l'affecte à l'intérieur de la fonction affiche1)
// 1°) Déclarer une variable nbre1 sans lui affecter de valeur
// 2°) Déclarer une fonction affiche1 qui
//    - stocke la valeur 2 dans une variable nbre1
//    - donne l'ordre d'afficher dans la console "Dans affiche1 : nbre1 =  "
// 3°) Déclarer une fonction affiche2 qui
//    - stocke la valeur 3 dans une variable nbre2
//    - donne l'ordre d'afficher dans la console "Dans affiche2 : nbre2 =  "
//    - donne l'ordre d'afficher dans la console "Dans affiche2 : nbre1 =  "
// 4°) Appeler affiche1 et affiche2
// 5°) Expliquer ce qui se passe

let n1ex3;
function affiche1ex3() {
    let n1ex3 = 2;
    console.log(`Dans affiche1 : n1 = ${n1ex3}`);
}
function affiche2ex3() {
    const n2ex3 = 3;
    console.log(`Dans affiche2 : n2 = ${n2ex3}`);
    console.log(`Dans affiche2 : n1 = ${n1ex3}`); // undefined
}
affiche1ex3();
affiche2ex3();

/*
RESUME :
- Portée d'une variable = ensemble des endroits où elle est accessible
- Variable locale : accessible que dans le corps de la fonction où elle se trouve
- Variable globale : accessible partout
*/