//Sélectionner les éléments de l'écran
const calculation = document.querySelector('.calcul');
const screenResult = document.querySelector('.screen h1');
const deleteIcon = document.querySelector('.fa-delete-left');

//Initialiser (l'état, << le state >>, de) la calculatrice
let state = {
    displayValue: '',
    operator: null,
    firstOperand: null,
    waitingForSecondOperand: false,
    calculationString: '',
    result: '0'
};

//Mettre à jour le résultat sur l'écran
function updateCalc() {
    calculation.textContent = state.displayValue;
    //screenResult.textContent = state.result;
}

//Mettre à jour le résultat sur l'écran
function updateScreen() {
    //calculation.textContent = state.displayValue;
    screenResult.textContent = state.result;
}

//Effacer l'écran
function clearScreen() {
    state.displayValue = '';
    state.operator = null;
    state.firstOperand = null;
    state.waitingForSecondOperand = false;
    state.calculationString = '';
    state.result = '0';
    updateCalc();
    updateScreen();
}

//Supprimer la dernière caractère sur l'écran
function deleteLastCharacter() {
    state.displayValue = state.displayValue.slice(0, -1) || '0';
    updateCalc();
    updateScreen();
}

//Basculer (inverser) la signe de la valeur affichée
function toggleSign() {
    state.displayValue = parseFloat(state.displayValue) * -1 + '';
    updateCalc();
    updateScreen();
}

//Gérer l'entrée des entiers
function inputDigit(digit) {
    if (state.waitingForSecondOperand === true) {
        state.displayValue = digit;
        state.waitingForSecondOperand = false;
    } else {
        state.displayValue = state.displayValue === '0' ? digit : state.displayValue + digit;
    }
    updateCalc();
    updateScreen();
}

//Gérer l'entrée des décimales
function inputDecimal() {
    if (!state.displayValue.includes('.')) {
        state.displayValue += '.';
    }
    updateCalc();
    updateScreen();
}

//Gérer l'entrée des opérateurs
function handleOperator(nextOperator) {
    const initialValue = parseFloat(state.displayValue);

    if (state.operator && state.waitingForSecondOperand) {
        state.operator = nextOperator;
        state.calculationString = state.calculationString.slice(0, -1) + state.operator;
        updateCalc();
        updateScreen();
        return;
    }

    if (state.firstOperand == null) {
        state.firstOperand = initialValue;
    } else if (state.operator) {
        const currentValue = state.firstOperand || 0;
        const result = doCalculation[state.operator](currentValue, initialValue);

        state.displayValue = `${parseFloat(result.toFixed(7))}`;
        state.result = result;
        state.firstOperand = result;
        state.calculationString += initialValue + nextOperator;
    }

    state.waitingForSecondOperand = true;
    state.operator = nextOperator;
    updateCalc();
    updateScreen();
}

//Créer l'objet qui comprennent les fonctions pour effectuer des différents calculs
const doCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
    '/': (firstOperand, secondOperand) => (firstOperand / 100) * secondOperand,
};

//Gérer les touches/appuies des boutons
function onPressed(key) {
    switch (key) {
        case 'C':
            clearScreen();
            break;
        case 'plus_minus':
            toggleSign();
            break;
        case '.':
            inputDecimal();
            break;
        case '/':
        case '*':
        case '+':
        case '-':
        case '%':
            handleOperator(key);
            break;
        case '=':
            handleOperator('=');
            break;
        default:
            if (Number.isInteger(parseInt(key))) {
                inputDigit(key);
            }
            break;
    }
}

//Gestion des événement pour les appuies des boutons
deleteIcon.addEventListener('click', () => {
    deleteLastCharacter();
})