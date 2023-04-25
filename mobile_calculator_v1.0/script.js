let operator = null;
let firstNumber = null;
//firstNumber = '';
let secondNumber = null;
let screen = document.getElementById('screen');
screen.innerHTML = '';

function clearScreen() {
    document.getElementById('screen').innerHTML = '';
    firstNumber = null;
    //firstNumber = '';
    operator = null;
    secondNumber = null;
}

function calculate(buttonValue) {
    //let screen = document.getElementById('screen');

    if (buttonValue === 'sqrt') {
        screen.innerHTML = Math.sqrt(parseFloat(screen.innerHTML));
        firstNumber = parseFloat(screen.innerHTML);
        operator = null;
        secondNumber = null;
    } else if (buttonValue === 'sq') {
        screen.innerHTML = parseFloat(screen.innerHTML) * parseFloat(screen.innerHTML);
        firstNumber = parseFloat(screen.innerHTML);
        operator = null;
        secondNumber = null;
    } else if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/') {
        firstNumber = parseFloat(screen.innerHTML);
        //firstNumber = parseFloat(screen.innerHTML.trim()); //trim to remove whitespace
        operator = buttonValue;
        screen.innerHTML = '';
    } else if (buttonValue === '=') {
        if (firstNumber != null && operator != null) {
            secondNumber = parseFloat(screen.innerHTML);
            //secondNumber = parseFloat(screen.innerHTML.trim()); //trim to remove whitespace
            if (operator === '+') {
                screen.innerHTML = firstNumber + secondNumber;
            } else if (operator === '-') {
                screen.innerHTML = firstNumber - secondNumber;
            } else if (operator === '*') {
                screen.innerHTML = firstNumber * secondNumber;
            } else if (operator === '/') {
                screen.innerHTML = firstNumber / secondNumber;
            }
            firstNumber = null;
            //firstNumber = '';
            operator = null;
            secondNumber = null;
        }
    } else {
        //screen.innerHTML = '';
        screen.innerHTML += buttonValue;
    }
}

// function calculate() {
//     var input = document.getElementById("input").value;
//     var result = eval(input);
//     document.getElementById("result").innerHTML = input + " = " + result;
// }