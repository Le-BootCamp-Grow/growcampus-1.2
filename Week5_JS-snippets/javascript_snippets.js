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

//Working with date
var today = new Date();
today
Date()
var birthdate = new Date(year, month - 1, day);
birthdate

// Function to calculate the exact age in years, months and days
function calculateAge(day, month, year) {
    //var day = '24';
    //var month = '09';
    //var year = '1984';
    var today = new Date();
    var birthdate = new Date(year, month - 1, day);
    //console.log(`Birthdate : ${birthdate}`)
    console.log(birthdate)

    console.log(birthdate.getFullYear());
    console.log(birthdate.getMonth() + 1);
    console.log(birthdate.getDate());

    if (birthdate.getFullYear() != year || birthdate.getMonth() + 1 != month || birthdate.getDate() != day) {
        console.log('The date is invalid');
        return;
    }

    if (birthdate > today) {
        console.log('Must be in the past');
        return;
    }

    var years = today.getFullYear() - birthdate.getFullYear();
    var months = today.getMonth() - birthdate.getMonth();
    var days = today.getDate() - birthdate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return (`You are ${years} years, ${months} months, and ${days} days`)
}

calculateAge('11', '04', '2003');

// Calculating the sum of an array of numbers
let chiffresArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
chiffres
let sumChiffres = chiffres.reduce((acc, val) => acc + val);
console.log(sumChiffres)

//Function to calculate the average of an array of numbers
function findAverage(array) {
    return `Average = ${array.reduce((acc, val) => acc + val) / array.length}`
}
let donnees = [5, 10, 15, 25, 30, 35]
findAverage(donnees)

//A dice game program using the rollTheDice function
const player1Dice = rollTheDice();
console.log(player1Dice)
const player2Dice = rollTheDice();
console.log(player2Dice)

function findWinner(dice_1, dice_2) {
  const player1Result = dice_1.reduce((acc, val) => acc + val);
  const player2Result = dice_2.reduce((acc, val) => acc + val);
  
  if (player1Result > player2Result) {
      return 'Player 1 wins!';
      } else if (player2Result > player1Result) {
        return 'Player 2 wins !';
      } else {
        return 'It is a tie !'
      }
}

findWinner(player1Dice, player2Dice)

// Function to calculate the mean/average of an array using for loop
function getMean(numArr) {
    let sum = 0;
    for (let i = 0; i < numArr.length; i++) {
        sum += numArr[i];
    }
    return sum / numArr.length;
}
let data = [12, 24, 36, 48, 60];
getMean(data)