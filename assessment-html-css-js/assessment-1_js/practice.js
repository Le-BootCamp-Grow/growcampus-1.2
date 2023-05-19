/* Basic JavaScript syntax and control structures */

// 1. Assign a variable and print its value
let name = "John";
console.log(name);

// 2. Use an if/else statement to check if a number is positive or negative
let number = -5;
if (number >= 0) {
console.log("The number is positive");
} else {
console.log("The number is negative");
}

// 3. Use a for loop to print all numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
console.log(i);
}

/* JavaScript concepts, variables and data types */

// 4. Create and print an array of strings
let fruits = ["apple", "banana", "orange"];
console.log(fruits);

// 5. Use typeof operator to check the data type of a variable
let age = 25;
console.log(typeof age);

// 6. Declare a constant variable and try to reassign it
const PI = 3.14;
PI = 3.141; // Error: Assignment to constant variable.

/* Simple JavaScript activities */

// 7. Write a function to calculate the sum of two numbers
function add(a, b) {
return a + b;
}

console.log(add(5, 10)); // Output: 15

// 8. Write a program to print all even numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
if (i % 2 === 0) {
console.log(i);
}
}

/* Functions, loops, arrays, objects and classes */

// 9. Create an object and access its properties
let person = {
name: "Alice",
age: 30,
city: "New York"
};

console.log(person.name); // Output: Alice

// 10. Write a function to find the maximum number in an array
function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
if (arr[i] > max) {
max = arr[i];
}
}
return max;
}

console.log(findMax([10, 5, 20, 30])); // Output: 30

/* Working with the DOM (The basics) */

// 11. Get an element by its ID and change its text content
let heading = document.getElementById("myHeading");
heading.textContent = "Hello World!";

// 12. Add a click event listener to a button element
let button = document.getElementById("myButton");
button.addEventListener("click", function() {
console.log("Button clicked!");
});

// Good luck with your JavaScript learning!