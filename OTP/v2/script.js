let form = document.getElementById("form1");
let nomInput = document.getElementById("nom");
let prenomInput = document.getElementById("prenom");
let mailInput = document.getElementById("mail");
let passwordInput = document.getElementById("password");
let telInput = document.getElementById("tel");
let nameError = document.getElementById("nom-error");
let prenomError = document.getElementById("prenom-error");
let mailError = document.getElementById("mail-error");
let passwordError = document.getElementById("password-error");
let telError = document.getElementById("tel-error");

let popup = document.getElementById("popup");
let popupTitle = document.getElementById("popup-title");
let popupMessage = document.getElementById("popup-message");
let popupClose = document.getElementById("popup-close");
// let code = document.getElementById("code");
let popupOkay = document.getElementById("popup-okay");

const OTP = Math.floor(Math.random() * 999999) + 9999;

form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors();

    if (nomInput.value === '') {
        showError(nomInput, nameError, "Nom vide");
    }

    if (prenomInput.value === '') {
        showError(prenomInput, prenomError, "Prénom vide");
    }

    if (passwordInput.value === '') {
        showError(passwordInput, passwordError, "Mot de passe vide");
    }

    if (mailInput.value === '') {
        showError(mailInput, mailError, "Adresse Gmail vide");
    }

    if (telInput.value === '') {
        showError(telInput, telError, "Numéro vide");
    } else {
        let regex = /^\+229/;
        if (!regex.test(telInput.value)) {
            showError(telInput, telError, "Le numéro de téléphone doit commencer par +229");
        } else {
            if (
                nomInput.value !== '' &&
                prenomInput.value !== '' &&
                passwordInput.value !== '' &&
                mailInput.value !== ''
            ) {
                // window.location.href = "otp.html";
                showPopup(mailInput.value);
            }
        }
    }
});

function showError(input, errorElement, errorMessage) {
    input.classList.add("error");
    errorElement.innerText = errorMessage;
}

/* function clearErrors() {
    nomInput.classList.remove("error");
    prenomInput.classList.remove("error");
    mailInput.classList.remove("error");
    passwordInput.classList.remove("error");
    telInput.classList.remove("error");
    nameError.innerText = "";
    prenomError.innerText = "";
    mailError.innerText = "";
    passwordError.innerText = "";
    telError.innerText = "";
} */

function clearErrors() {
    let inputs = [nomInput, prenomInput, mailInput, passwordInput, telInput],
        errorElements = [nameError, prenomError, mailError, passwordError, telError];

    inputs.forEach(function (input) {
        input.classList.remove("error");
    });

    errorElements.forEach(function (errorElement) {
        errorElement.innerText = "";
    });
}

function showPopup(email) {
    popupTitle.textContent = "Confirmer";
    // popupMessage.textContent = "Félicitations! Vous vous êtes inscrit! Voici votre code OTP ci-dessous pour accéder à la plateform lors de l'inscription."
    popupMessage.textContent = `An authentication code has been sent to ${email}. Please check your email inbox. Click the button below to confirm your number`;
    // code.innerText = OTP;
    popup.classList.add("show");
}

function hidePopup() {
    popup.classList.remove("show");
}

// popupClose.addEventListener("click", hidePopup);

/* popupOkay.addEventListener("click", function () {
    hidePopup();
    window.location.href = "otp.html";
})

popupOkay.addEventListener('click', function () {
    hidePopup();
    sendOTP(mailInput.value);
});

function sendOTP(email) {
    fetch('/send-otp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
    })
        .then((response) => {
            if (response.ok) {
                console.log('OTP sent successfully');
            } else {
                console.error('Failed to send OTP');
            }
        })
        .catch((error) => {
            console.error('Error sending OTP:', error);
        });
} */

