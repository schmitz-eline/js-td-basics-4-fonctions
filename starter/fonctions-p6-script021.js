/*****************************
* 021 - Function Statements and Expressions
*/

/*
1. Déclarez, en utilisant une fonction expression, la fonction whatDoYouDo
   prenant deux paramètres, job et firstName. Cette fonction retourne le prénom suivi
   d'une phrase qui décrit le job de la personne pour différents cas de job :
   - si c'est teacher, "teaches kids how to code"
   - si c'est driver, "drives a cab in Lisbon"
   - si c'est designer, "designs beautiful websites"
   - dans tous les autres cas, "does something else"
*/

function whatDoYouDo(job, firstName) {
    switch (job) {
        case 'teacher' :
            return `${firstName} teaches kids how to code`;
        case 'driver' :
            return `${firstName} drives a cab in Lisbon`;
        case 'designer' :
            return `${firstName} designs beautiful websites`;
        default :
            return `${firstName} does something else`;
    }
}

/*
2. Utilisez cette fonction pour afficher dans la console ce que font :
    - John (teacher)
    - Jane (designer)
    - Mark (retired)
*/

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('Mark', 'retired'));