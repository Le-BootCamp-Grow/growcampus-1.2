/* // Get DOM elements
const screen = document.querySelector('.screen');
const calcul = document.querySelector('.calcul');
const clearBtn = document.querySelector('.key-c');
const equalBtn = document.querySelector('.op-equal');

// Variables to store calculator data
let currentVal = '';
let currentOperator = null;
let prevVal = '';
let calculationFinished = false;

// Functions to handle calculator logic

function clearScreen() {
    screen.textContent = '';
    calcul.textContent = '';
    currentVal = '';
    currentOperator = null;
    prevVal = '';
    calculationFinished = false;
}

function inputDecimal() {
    if (!currentVal.includes('.')) {
        currentVal += '.';
        screen.textContent = currentVal;
    }
}

function toggleSign() {
    currentVal = Number.parseFloat(currentVal) * -1;
    screen.textContent = currentVal;
}

function inputDigit(digit) {
    if (currentVal === '0' || calculationFinished) {
        currentVal = digit.toString();
        calculationFinished = false;
    } else {
        currentVal += digit.toString();
    }
    screen.textContent = currentVal;
}

function handleOperator(operator) {
    if (currentOperator === null) {
        prevVal = currentVal;
    } else if (!calculationFinished) {
        performCalculation();
    }
    currentOperator = operator;
    calculationFinished = false;
    calcul.textContent = `${prevVal} ${currentOperator}`;
    currentVal = '';
    screen.textContent = '';
}

function performCalculation() {
    let result = 0;
    const prev = Number.parseFloat(prevVal);
    const current = Number.parseFloat(currentVal);
    if (isNaN(prev) || isNaN(current)) return;
    switch (currentOperator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        case '%':
            result = prev % current;
            break;
        default:
            return;
    }
    currentVal = result.toString();
    currentOperator = null;
    prevVal = currentVal;
    screen.textContent = currentVal;
    calculationFinished = true;
}

// Event listeners for button clicks

clearBtn.addEventListener('click', clearScreen);

equalBtn.addEventListener('click', () => {
    if (currentOperator !== null) {
        performCalculation();
        calcul.textContent = '';
    }
});

document.querySelectorAll('.num').forEach(button => {
    button.addEventListener('click', () => inputDigit(button.textContent));
});

document.querySelectorAll('.op').forEach(button => {
    button.addEventListener('click', () => handleOperator(button.textContent));
});

// Handle delete icon
const deleteIcon = document.querySelector('.fa-delete-left');
deleteIcon.addEventListener('click', () => {
    if (screen.textContent !== '') {
        currentVal = currentVal.slice(0, -1);
        screen.textContent = currentVal;
    }
});

// Handle hover and focus states for buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.classList.add('hover');
    });
    button.addEventListener('mouseout', () => {
        button.classList.remove('hover');
    });
    button.addEventListener('focus', () => {
        button.classList.add('focus');
    });
    button.addEventListener('blur', () => {
        button.classList.remove('focus');
    });
});
 */

let expression = "";
let result = "";

// function to update the small element
function updateCalc() {
    const calc = document.querySelector(".calcul");
    calc.textContent = expression;
}

// function to update the result on the screen
function updateResult() {
    const screen = document.querySelector(".screen h1");
    screen.textContent = result;
}

// function to evaluate the expression
function evaluate() {
    try {
        result = eval(expression);
    } catch (error) {
        result = "";
    }
}

// function to handle button press
function onPressed(key) {
    const operators = ["+", "-", "*", "/", "%"];

    if (key === "C") {
        // clear screen
        expression = "";
        result = "0";
    } else if (key === "br") {
        // add brackets
        expression += "()";
    } else if (key === "plus_minus") {
        // toggle positive/negative
        if (expression.charAt(0) === "-") {
            expression = expression.slice(1);
        } else {
            expression = "-" + expression;
        }
    } else if (key === "=") {
        // evaluate expression
        evaluate();
        expression = result;
    } else if (key === "del") {
        // delete last character
        expression = expression.slice(0, -1);
    } else if (key === "." && expression.slice(-1) === ".") {
        // do nothing if expression already has a decimal
    } else if (key === "." && /\d$/.test(expression)) {
        // add decimal if last character is a number
        expression += ".";
    } else if (key === "." && expression === "") {
        // add 0 before decimal if expression is empty
        expression += "0.";
    } else if (key === "." && operators.some((op) => expression.slice(-1) === op)) {
        // add 0 before decimal if last character is an operator
        expression += "0.";
    } else if (operators.some((op) => key === op)) {
        // add operator
        if (expression === "") {
            // do nothing if expression is empty
        } else if (operators.some((op) => expression.slice(-1) === op)) {
            // replace last operator if there are two operators in a row
            expression = expression.slice(0, -1) + key;
        } else {
            // add operator
            expression += key;
        }
    } else {
        // add number
        expression += key;
    }

    updateCalc();
    evaluate();
    updateResult();
}
