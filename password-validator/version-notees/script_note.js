/* 
 *    Growcampus - Notes
 *
 *    Ce script JavaScript est responsable de la validation du formulaire d'inscription. 
 *    Il effectue des vérifications sur les champs du formulaire 
 *    et met à jour la force du mot de passe en fonction de certains critères. 
 */

/* Etape 1 - Récupération des éléments du formulaire */
// Champ de saisie pour le nom
const nameInput = document.getElementById('name');
// Champ de saisie pour l'adresse e-mail
const emailInput = document.getElementById('email');
// Champ de saisie pour le mot de passe
const passwordInput = document.getElementById('password');
// Barres de force du mot de passe
const passwordStrengthBars = document.querySelectorAll('#passwordStrength .bar');
// Bouton de soumission du formulaire
const submitBtn = document.getElementById('submitBtn');
// Un tableau contenant les textes de force du mot de passe
const passwordStrengthText = ['Faible', 'Moyenne', 'Bonne', 'Très bonne'];
// Case à cocher pour l'accord des conditions
const agreeCheckBox = document.getElementById('agree');

/* 
    Écouteurs d'événements pour la mise à jour de la force du mot de passe et le basculement du bouton de soumission
 */
passwordInput.addEventListener('input', updatePasswordStrength);
passwordInput.addEventListener('input', toggleSubmitButton);
agreeCheckBox.addEventListener('change', toggleSubmitButton);

/* 
    Fonction pour mettre à jour la force du mot de passe
 */
function updatePasswordStrength() {
    const password = passwordInput.value;
    let strength = 0;

    // Vérifier si le mot de passe a plus de 8 caractères
    if (password.length > 8) {
        strength++;
    }

    // Vérifier si le mot de passe contient au moins une lettre minuscule
    if (/[a-z]/.test(password)) {
        strength++;
    }

    // Vérifier si le mot de passe contient au moins une lettre majuscule
    if (/[A-Z]/.test(password)) {
        strength++;
    }

    // Vérifier si le mot de passe contient au moins un chiffre
    if (/[0-9]/.test(password)) {
        strength++;
    }

    // Mettre à jour les barres de force du mot de passe en fonction de sa force actuelle
    passwordStrengthBars.forEach((bar, index) => {
        bar.classList.remove('good', 'strong', 'perfect');

        if (index < strength) {
            bar.classList.add('good');
        }
    });

    /*  Si la force du mot de passe est maximale, ajouter la classe "perfect" aux barres de force 
        et au champ de saisie du mot de passe
     */
    if (strength === 4) {
        passwordStrengthBars.forEach(bar => {
            bar.classList.add('perfect');
        });
        passwordInput.classList.add("perfect");
    }
    else {
        passwordInput.classList.remove("perfect");
    }
}

/* 
    Fonction pour basculer l'état du bouton de soumission
 */
function toggleSubmitButton() {
    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const isAgreed = agreeCheckBox.checked;

    // Vérifier si tous les champs obligatoires sont remplis et si la longueur du mot de passe est supérieure à 8 caractères
    if (name && email && password && isAgreed && password.length > 8) {
        submitBtn.disabled = false; // Activer le bouton de soumission
    } else {
        submitBtn.disabled = true; // Désactiver le bouton de soumission
    }
}

/* 
    Notes supplémentaires:

    Les mots-clés utilisés dans ce script JavaScript sont les suivants:

        • const: déclare une constante (une variable dont la valeur ne peut pas être modifiée).
        • document: fait référence à l'objet représentant le document HTML actuel.
        • getElementById(): récupère un élément du document en utilisant son ID.
        • addEventListener(): ajoute un écouteur d'événements à un élément, qui réagit lorsque l'événement spécifié se produit.
        • input: un événement qui se déclenche lorsqu'une valeur est saisie dans un champ de saisie.
        • querySelectorAll(): sélectionne plusieurs éléments du document en utilisant un sélecteur CSS.
        • forEach(): exécute une fonction pour chaque élément d'un tableau.
        • test(): teste si une chaîne de caractères correspond à une expression régulière.
        • classList: représente la liste des classes d'un élément.
        • add(): ajoute une classe à la liste des classes d'un élément.
        • remove(): supprime une classe de la liste des classes d'un élément.
        • checked: une propriété d'une case à cocher qui indique si elle est cochée ou non.
        • disabled: une propriété d'un élément qui indique s'il est désactivé ou non.

    • Assurez-vous d'avoir correctement défini les ID des éléments HTML 
    pour qu'ils correspondent aux sélecteurs utilisés dans le script.

    • L'algorithme de mise à jour de la force du mot de passe vérifie plusieurs critères 
    tels que la longueur du mot de passe, la présence de lettres minuscules, de lettres majuscules et de chiffres. 
    La force est mesurée en utilisant un compteur strength qui est incrémenté à chaque critère respecté. 
    Les barres de force sont mises à jour en ajoutant ou en supprimant des classes CSS en fonction de la force actuelle.

    • La fonction toggleSubmitButton vérifie si tous les champs obligatoires sont remplis, 
    si la case à cocher pour les conditions est cochée et si la longueur du mot de passe est supérieure à 8 caractères. 
    En fonction de ces conditions, le bouton de soumission est activé ou désactivé.

    • N'oubliez pas d'inclure ce script JavaScript dans votre fichier HTML pour qu'il soit exécuté correctement. 
*/