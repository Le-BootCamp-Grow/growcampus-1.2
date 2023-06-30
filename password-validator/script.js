const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const passwordStrengthBars = document.querySelectorAll('#passwordStrength .bar');
const submitBtn = document.getElementById('submitBtn');
const passwordStrengthText = ['Poor', 'Weak', 'Medium', 'Strong'];
const agreeCheckBox = document.getElementById('agree');

passwordInput.addEventListener('input', updatePasswordStrength);
passwordInput.addEventListener('input', toggleSubmitButton);
agreeCheckBox.addEventListener('change', toggleSubmitButton);

function updatePasswordStrength() {
    const password = passwordInput.value;
    let strength = 0;

    if (password.length > 8) {
        strength++;
    }

    if (/[a-z]/.test(password)) {
        strength++;
    }

    if (/[A-Z]/.test(password)) {
        strength++;
    }

    if (/[0-9]/.test(password)) {
        strength++;
    }

    passwordStrengthBars.forEach((bar, index) => {
        bar.classList.remove('good', 'strong', 'perfect');

        if (index < strength) {
            bar.classList.add('good');
        }
    });

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

function toggleSubmitButton() {
    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const isAgreed = agreeCheckBox.checked;

    if (name && email && password && isAgreed && password.length > 8) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}
