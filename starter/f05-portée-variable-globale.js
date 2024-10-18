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

/*
function affiche1(){
    const nbre1 = 2;
}
function affiche2() {
    const nbre2 = 3;
    console.log(`Dans affiche2 : nbre2 = ${nbre2}`);
    console.log(`Dans affiche2 : nbre1 = ${nbre1}`);
}
affiche2();
 */
// nbre1 is not defined => il est stocké localement dans affiche1() et donc ne fonctionne pas en dehors de cette fonction

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

/*
const nbre1 = 2;
function affiche1() {
    console.log(`Dans affiche1 : nbre1 = ${nbre1}`);
}
function affiche2() {
    const nbre2 = 3;
    console.log(`Dans affiche2 : nbre2 = ${nbre2}`);
    console.log(`Dans affiche2 : nbre1 = ${nbre1}`);
}
affiche1();
affiche2();
 */
// nbre1 est initialisé hors des fonction et donc peut fonctionner dans les 2 fonctions. nbre2 est initialisé localement dans affiche2() donc il fonctionne dans affiche2(), mais si on l'avait essayé dans affiche1(), ça aurait dit que nbre2 is not defined.

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

let nbre1;
function affiche1() {
    nbre1 = 2;
    console.log(`Dans affiche1 : nbre1 = ${nbre1}`);
}
function affiche2() {
    const nbre2 = 3;
    console.log(`Dans affiche2 : nbre2 = ${nbre2}`);
    console.log(`Dans affiche2 : nbre1 = ${nbre1}`);
}
affiche1();
affiche2();
// Idem qu'avant sauf qu'on peut réutiliser nbre1 car elle a été initialisée en dehors des fonctions, il suffit juste de lui appliquer une valeur

/*
RESUME :
- Portée d'une variable = ensemble des endroits où elle est accessible
- Variable locale : accessible que dans le corps de la fonction où elle se trouve
- Variable globale : accessible partout
*/
