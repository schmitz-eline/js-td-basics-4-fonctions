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
const isBissextile = annee => {
    let bissextile = false;
    if ((annee%4 === 0 && annee%100 !== 0) || annee%400 === 0) {
        bissextile = true;
    }
    return bissextile;
}

console.log(isBissextile(2024));

// Fonction pour vérifier si une date est valide
const isValid = (day, month, year) => {
    const date = `${day}/${month}/${year}`;
    let maxDays = 31;
    if (month===4 || month===6 || month===9 || month===11) {
        maxDays = 30;
    } else if (month === 2) {
        maxDays = 28;
        if (isBissextile()) {
            maxDays = 29;
        }
    }

    if (day && month && year) {
        if (day > 0 && month > 0 && year > 0) {
            if (month <= 12) {
                if (day <= maxDays) {
                    console.log(`La date ${date} est valide.`);
                } else {
                    console.log(`Le jour doit être inférieur ou égal à ${maxDays}.`);
                }
            } else {
                console.log("Le mois doit être inférieur à 12.");
            }
        } else {
            console.log("Un nombre POSITIF.");
        }
    } else {
        console.log("Entrez un NOMBRE svp.");
    }

    return date;
}


// Demander à l'utilisateur de saisir une date
day = parseInt(prompt("Entrez un jour"));
month = parseInt(prompt("Entrez un mois"));
year = parseInt(prompt("Entrez une année"));

// Utilisation de la fonction isValid pour vérifier la date
isValid(day, month, year);