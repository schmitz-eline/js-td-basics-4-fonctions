/*
FONCTIONS - PRÉPA 4 : Date valide - version 2
Écrire un programme JS qui teste si une date entrée par l'utilisateur est une date valide ou pas
- Déclarez deux fonctions :
  - isBissextile retourne true ou false selon que l'année est bissextile ou pas
  - isValid retourne true ou false selon que la date est valide ou pas
- Utilisez isBissextile dans isValid pour gérer le cas du mois de février
- Utilisez isValid pour décider si votre date est valide
  avant d'afficher votre message dans la console
*/

// Fonction pour vérifier si une année est bissextile
function isLeap(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Fonction pour vérifier si une date est valide
function isValid(day, month, year) {
    let maxDay;

    if (month < 1 || month > 12) {
        return false;
    }

    if (month === 2) {
        maxDay = isLeap(year) ? 29 : 28;
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        maxDay = 30;
    } else {
        maxDay = 31;
    }

    return day >= 1 && day <= maxDay;
}

// Demander à l'utilisateur de saisir une date
const day = parseInt(prompt('Entrez un jour'));
const month = parseInt(prompt('Entrez un mois'));
const year = parseInt(prompt('Entrez une année'));

// Utilisation de la fonction isValid pour vérifier la date
if (isValid(day, month, year)) {
    console.log(`La date ${day}/${month}/${year} est valide`);
} else {
    console.log(`La date ${day}/${month}/${year} n’est pas valide`);
}