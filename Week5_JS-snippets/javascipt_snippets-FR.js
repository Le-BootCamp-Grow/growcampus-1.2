// Fonction pour afficher la série de Fibonacci jusqu'à n termes
function fibonacci(n) {
    let premierNombre = 0;
    let deuxiemeNombre = 1;
    let prochainNombre;
    // Afficher les deux premiers termes de la série
    console.log(premierNombre);
    console.log(deuxiemeNombre);
    // Boucler pour afficher les nombres restants
    for (i = 2; i < n; i++) {
        prochainNombre = premierNombre + deuxiemeNombre;
        console.log(prochainNombre);
        premierNombre = deuxiemeNombre;
        deuxiemeNombre = prochainNombre;
    }
}

fibonacci(10)

// Fonction pour afficher la série de Fibonacci à partir d'un entier a, jusqu'à n termes
function fibonacci(a, n) {
    let premierNombre = a;
    let deuxiemeNombre = a + 1;
    let prochainNombre;
    // Afficher les deux premiers termes de la série
    console.log(premierNombre);
    console.log(deuxiemeNombre);
    // Boucler pour afficher les nombres restants
    for (i = 2; i < n; i++) {
        prochainNombre = premierNombre + deuxiemeNombre;
        console.log(prochainNombre);
        premierNombre = deuxiemeNombre;
        deuxiemeNombre = prochainNombre;
    }
}

fibonacci(25, 5)

// Fonction pour afficher la table de multiplication d'un nombre
function afficherTableMultiplication(nombre) {
    let resultat;
    for (let i = 1; i <= 12; i++) {
        resultat = nombre * i;
        console.log(`${nombre} fois ${i} = ${resultat}`);
    }
}

afficherTableMultiplication(16)

// Fonction pour afficher tous les nombres impairs de 1 à 100
function afficherNombresImpairs() {
    let nombre;
    for (i = 1; i <= 100; i++) {
        if (i % 2 == 1) {
            console.log(i);
        }
    }
}

afficherNombresImpairs()

// Fonction pour vérifier si un nombre est positif ou négatif
function verifierPositivite(num) {
    if (num > 0) {
        return (`Le nombre ${num} est positif`);
    } else {
        return (`Le nombre ${num} est négatif`);
    }
}

verifierPositivite(2)

// Tableaux
let chiffres = [1, 2, 3, 4, 5, 6]
chiffres
let pair = [2, 4, 6]
pair
let impair = [1, 3, 5]
impair
let fruits = ['orange', 'banane', 'ananas', 'pastèque', 'mangue']
fruits
let tab = ['oranges', 1, 10, 'stylos', 'Bénin']
tab

// Fonction pour trouver le nombre maximum dans un tableau
function trouverNombreMax(arr) {
    let maxInitial = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxInitial) {
            maxInitial = arr[i];
        }
    }
    return (`Le plus grand nombre dans ce tableau est ${maxInitial}`);
}

let tableauExemple = [10, 15, 25, 300, 35, 40, 45, 50];

trouverNombreMax(tableauExemple)

// Fonction pour afficher le produit et la racine carrée de 2 nombres
function trouverProduitEtRacine(num1, num2) {
    let produit = num1 * num2;
    let racine = Math.sqrt(produit);
    console.log(`Le produit est ${produit}`);
    console.log(`La racine carrée est ${racine}`);
}

trouverProduitEtRacine(45, 5)

// Travailler avec Math.random()
Math.random()
Math.floor(Math.random() * 10)

function lancerLesDes() {
    // Générer un entier aléatoire entre 1 et 6 (inclus) pour chaque dé
    const de1 = Math.floor(Math.random() * 6) + 1;
    const de2 = Math.floor(Math.random() * 6) + 1;

    // Retourner un tableau des deux valeurs de dé
    return [de1, de2];
}

lancerLesDes()

// Travailler avec les dates
var aujourdHui = new Date();
aujourdHui
Date()
var dateDeNaissance = new Date(annee, mois - 1, jour);
dateDeNaissance

// Fonction pour calculer l'âge exact en années, mois et jours
function calculerAge(jour, mois, annee) {
    //var jour = '24';
    //var mois = '09';
    //var annee = '1984';
    var aujourdHui = new Date();
    var dateDeNaissance = new Date(annee, mois - 1, jour);
    //console.log(`Date de naissance : ${dateDeNaissance}`)
    console.log(dateDeNaissance)

    console.log(dateDeNaissance.getFullYear());
    console.log(dateDeNaissance.getMonth() + 1);
    console.log(dateDeNaissance.getDate());

    if (dateDeNaissance.getFullYear() != annee || dateDeNaissance.getMonth() + 1 != mois || dateDeNaissance.getDate() != jour) {
        console.log('La date n\'est pas valide');
        return;
    }

    if (dateDeNaissance > aujourdHui) {
        console.log('Doit être dans le passé');
        return;
    }

    var annees = aujourdHui.getFullYear() - dateDeNaissance.getFullYear();
    var mois = aujourdHui.getMonth() - dateDeNaissance.getMonth();
    var jours = aujourdHui.getDate() - dateDeNaissance.getDate();

    if (jours < 0) {
        mois--;
        jours += new Date(aujourdHui.getFullYear(), aujourdHui.getMonth(), 0).getDate();
    }

    if (mois < 0) {
        annees--;
        mois += 12;
    }

    return (`Vous avez ${annees} ans, ${mois} mois et ${jours} jours`)
}

calculerAge('11', '04', '2003');

// Calculer la somme d'un tableau de nombres
let tableauChiffres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
chiffres
let sommeChiffres = chiffres.reduce((acc, val) => acc + val);
console.log(sommeChiffres)

// Fonction pour calculer la moyenne d'un tableau de nombres
function trouverMoyenne(tableau) {
    return `Moyenne = ${tableau.reduce((acc, val) => acc + val) / tableau.length}`
}
let donnees = [5, 10, 15, 25, 30, 35]
trouverMoyenne(donnees)

// Un programme de jeu de dés en utilisant la fonction lancerLesDes
const desJoueur1 = lancerLesDes();
console.log(desJoueur1)
const desJoueur2 = lancerLesDes();
console.log(desJoueur2)

function trouverGagnant(des1, des2) {
    const resultatJoueur1 = des1.reduce((acc, val) => acc + val);
    const resultatJoueur2 = des2.reduce((acc, val) => acc + val);

    if (resultatJoueur1 > resultatJoueur2) {
        return 'Le joueur 1 gagne !';
    } else if (resultatJoueur2 > resultatJoueur1) {
        return 'Le joueur 2 gagne !';
    } else {
        return 'C\'est une égalité !'
    }
}

trouverGagnant(desJoueur1, desJoueur2)

// Fonction pour calculer la moyenne d'un tableau en utilisant for loop
function obtenirMoyenne(tableau) {
    let somme = 0;
    for (let i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }
    return somme / tableau.length;
}
let tableauDonnees = [12, 24, 36, 48, 60];
getMean(tableauDonnees)
