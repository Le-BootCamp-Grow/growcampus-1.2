
let form = document.getElementById("form1")


form.addEventListener('submit', function (e) {

    e.preventDefault()

    let nom = document.getElementById("nom").value
    let prenom = document.getElementById("prenom").value
    let mail = document.getElementById("mail").value
    let password = document.getElementById("password").value
    let tel = document.getElementById("tel").value
    let nameerror = document.getElementById("nameerror")

    if (nom === '') {
        nameerror.innerHTML = "nom vide"
    }

    if (prenom === '') {
        console.log("prenom vide")
    }

    if (password === '') {
        console.log("password vide")
    }

    if (mail === '') {
        console.log("mail vide")
    }

    if (tel === '') {
        console.log("tel vide")
    } else {
        let regex = /^\+229/;
        if (!regex.test(tel)) {
            console.log("le numéro de telephone ne commence pas par +229")
        } else {
            if (nom != '' && prenom != '' && password != '' && mail != '') {
                window.location.href = "redirect.html"
            }
        }
    }
})