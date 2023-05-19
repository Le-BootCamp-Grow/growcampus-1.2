//PART 1

// Problem 1: Temperature Conversion
// Write a function that takes a temperature in Fahrenheit and converts it to Celsius.
// Formula: (F - 32) * (5/9)

function fahrenheitToCelsius(fahrenheit) {
    // Your code here
}

// Sample solution
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}
console.log(fahrenheitToCelsius(68)); // Output: 20

// Problem 2: Multiplication Table
// Write a function that takes a number and prints its multiplication table up to 10.

function multiplicationTable(num) {
    // Your code here
}

// Sample solution
function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
multiplicationTable(5); // Output: 5 x 1 = 5, 5 x 2 = 10, 5 x 3 = 15, 5 x 4 = 20, 5 x 5 = 25, 5 x 6 = 30, 5 x 7 = 35, 5 x 8 = 40, 5 x 9 = 45, 5 x 10 = 50

// Problem 3: Counting Words
// Write a function that takes a string and returns the number of words in it.

function countWords(str) {
    // Your code here
}

// Sample solution
function countWords(str) {
    return str.split(" ").length;
}
console.log(countWords("Hello world")); // Output: 2

// Problem 4: FizzBuzz
// Write a function that prints the numbers from 1 to 100.
// But for multiples of three, print "Fizz" instead of the number.
// And for the multiples of five, print "Buzz".
// For numbers that are multiples of both three and five, print "FizzBuzz".

function fizzBuzz() {
    // Your code here
}

// Sample solution
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzBuzz(); // Output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, ...

// Problem 5: Reverse String
// Write a function that takes a string and returns its reverse.

function reverseString(str) {
    // Your code here
}

// Sample solution
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("Hello world")); // Output: dlrow olleH

//PART 2

// Challenge 1: Write a function that takes in a number and returns the factorial of that number.
// For example, the factorial of 5 is 5*4*3*2*1 = 120.
// Instructions: Write a function called factorial that takes in a number as an argument and returns the factorial of that number.
// Sample solution:
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

// Challenge 2: Write a function that takes in a string and returns the longest word in the string.
// For example, given the string "The quick brown fox jumped over the lazy dog", the function should return "jumped".
// Instructions: Write a function called longestWord that takes in a string as an argument and returns the longest word in the string.
// Sample solution:
function longestWord(str) {
    let words = str.split(' ');
    let maxLength = 0;
    let result = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
            result = words[i];
        }
    }
    return result;
}

// Challenge 3: Write a function that takes in an array of numbers and returns the sum of all the numbers in the array.
// For example, given the array [1, 2, 3, 4], the function should return 10 (which is 1 + 2 + 3 + 4).
// Instructions: Write a function called sumArray that takes in an array of numbers as an argument and returns the sum of all the numbers in the array.
// Sample solution:
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Challenge 4: Write a function that takes in two arrays and returns a new array that contains only the elements that are common to both arrays.
// For example, given the arrays [1, 2, 3, 4] and [3, 4, 5, 6], the function should return [3, 4].
// Instructions: Write a function called commonElements that takes in two arrays as arguments and returns a new array that contains only the elements that are common to both arrays.
// Sample solution:
function commonElements(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }
    return result;
}

//PART 3

// Challenge 1
// Write a function named `largerNumber` that takes in two numbers as arguments and returns the larger of the two numbers.

// Sample Solution
function largerNumber(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(largerNumber(5, 10)); // Output: 10

// Challenge 2
// Write a function named `reverseString` that takes in a string as an argument and returns the reversed string.

// Sample Solution
function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

console.log(reverseString('hello')); // Output: 'olleh'

// Challenge 3
// Write a function named `isEven` that takes in a number as an argument and returns true if the number is even and false if the number is odd.

// Sample Solution
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(4)); // Output: true

// Challenge 4
// Write a function named `average` that takes in an array of numbers as an argument and returns the average of the numbers in the array.

// Sample Solution
function average(numArr) {
    let sum = 0;
    for (let i = 0; i < numArr.length; i++) {
        sum += numArr[i];
    }
    return sum / numArr.length;
}

console.log(average([12, 24, 36, 48, 60])); // Output: 3

// Challenge 5
// Write a function named `countVowels` that takes in a string as an argument and returns the number of vowels in the string.

// Sample Solution
function countVowels(str) {
    let vowelCount = 0;
    for (let i = 0; i < str.length; i++) {
        if ('aeiouAEIOU'.includes(str[i])) {
            vowelCount++;
        }
    }
    return vowelCount;
}

console.log(countVowels('hello world')); // Output: 3


//PART 4

console.log('GOOD LUCK 👩‍💻 👨‍💻');

/* Q1:
Create a function called multiply that takes two numbers as parameters and returns their product.

Example:
multiply(3, 5) => 15
multiply(-4, 2) => -8
*/

function multiply() {
    // WRITE YOUR CODE BELOW THIS LINE
}

/* Q2:
Create a function called calculateGrade that takes a number as a parameter and returns the corresponding grade according to this grading system:

- A: 90-100
- B: 80-89
- C: 70-79
- D: 60-69
- F: 0-59

If the number is not between 0-100, return "Invalid score".

Example:
calculateGrade(85) => "B"
calculateGrade(92) => "A"
calculateGrade(45) => "F"
calculateGrade(110) => "Invalid score"
*/

function calculateGrade() {
    // WRITE YOUR CODE BELOW THIS LINE
}

/* Q3:
Create a function called sum that takes an array of numbers as a parameter and returns their sum.

Example:
sum([1, 2, 3, 4]) => 10
sum([10, 20, -5]) => 25
*/

function sum() {
    // WRITE YOUR CODE BELOW THIS LINE
}

/* Q4:
Create a function called isPalindrome that takes a string as a parameter and returns true if the string is a palindrome (reads the same backward as forward), and false otherwise.

Example:
isPalindrome("racecar") => true
isPalindrome("hello") => false
*/

function isPalindrome() {
    // WRITE YOUR CODE BELOW THIS LINE
}

/* Q5:
Create a function called calculateFactorial that takes a positive integer as a parameter and returns its factorial (the product of all positive integers up to and including that integer).

Example:
calculateFactorial(5) => 120
calculateFactorial(10) => 3628800
*/

function calculateFactorial() {
    // WRITE YOUR CODE BELOW THIS LINE
}
