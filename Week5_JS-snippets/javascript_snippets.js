//Function to print Fibonacci series upto n terms
function fibonacci(n) {
    let firstNum = 0;
    let secondNum = 1;
    let nextNum;
    //Print the first two terms of the series
    console.log(firstNum);
    console.log(secondNum);
    //Loop the print of the remaining numbers
    for (i = 2; i < n; i++) {
        nextNum = firstNum + secondNum;
        console.log(nextNum);
        firstNum = secondNum;
        secondNum = nextNum;
    }
}

fibonacci(10)

//Function to print Fibonacci series from an integer a, upto n terms
function fibonacci(a, n) {
    let firstNum = a;
    let secondNum = a + 1;
    let nextNum;
    //Print the first two terms of the series
    console.log(firstNum);
    console.log(secondNum);
    //Loop the print of the remaining numbers
    for (i = 2; i < n; i++) {
        nextNum = firstNum + secondNum;
        console.log(nextNum);
        firstNum = secondNum;
        secondNum = nextNum;
    }
}

fibonacci(25, 5)

//Function to print the multiplication table of any number
function afficherTableMultiplication(number) {
    let result;
    for (let i = 1; i <= 12; i++) {
        result = number * i;
        console.log(`${number} times ${i} = ${result}`);
    }
}

afficherTableMultiplication(16)

//Function to print all odd numbers from 1 to 100
function printOddNumbers() {
    let num;
    for (i = 1; i <= 100; i++) {
        if (i % 2 == 1) {
            console.log(i);
        }
    }
}

printOddNumbers()

//Function to check if a number is positive or negative
function checkPositivity(num) {
    if (num > 0) {
        return (`The number ${num} is positive`);
    } else {
        return (`The number ${num} is negative`);
    }
}

checkPositivity(2)

//Arrays
let chiffres = [1, 2, 3, 4, 5, 6]
chiffres
let pair = [2, 4, 6]
pair
let impair = [1, 3, 5]
impair
let fruits = ['orange', 'banane', 'ananas', 'pasteque', 'mangue']
fruits
let tab = ['oranges', 1, 10, 'stylos', 'Benin']
tab

//Function to find the maximum number in an array
function findMaxNumber(arr) {
    let initialMax = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > initialMax) {
            initialMax = arr[i];
        }
    }
    return (`The largest number in this array is ${initialMax}`);
}

let sampleArray = [10, 15, 25, 300, 35, 40, 45, 50];

findMaxNumber(sampleArray)

//Function to print the product and square root of 2 numbers
function findProductAndRoot(num1, num2) {
    let product = num1 * num2;
    let root = Math.sqrt(product);
    console.log(`The product is ${product}`);
    console.log(`The square root is ${root}`);
}

findProductAndRoot(45, 5)

//Working with Math.random()
Math.random()
Math.floor(Math.random() * 10)

function rollTheDice() {
    // Generate a random integer between 1 and 6 (inclusive) for each die
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;

    // Return an array of the two dice values
    return [die1, die2];
}

rollTheDice()

var today = new Date();
today
Date()
var birthdate = new Date(year, month - 1, day);
birthdate