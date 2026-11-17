// PART 1 – BASIC FUNCTIONS
// Task 1
function welcome() {
    console.log("Welcome to JavaScript");
}
welcome();
// Task 2
function student() {
    console.log("Bharath");
    console.log(23);
    console.log("Salem");
}
student();
// Task 3
function addition() {
    let a = 10;
    let b = 20;
    console.log(a + b);
}
addition();
// Task 4
function calculator() {
    let a = 20;
    let b = 10;
    console.log("Addition:", a + b);
    console.log("Subtraction:", a - b);
}
calculator();
// Task 5
function company() {
    console.log("Welcome to Stackly");
}
company();
// Task 6
function multiplication() {
    let a = 5;
    let b = 4;
    console.log(a * b);
}
multiplication();
// Task 7
function greeting() {
    console.log("Hello Bharath");
}
greeting();
greeting();
greeting();
// PART 2 – PARAMETERS AND ARGUMENTS
// Task 8
function addNumbers(a, b) {
    console.log(a + b);
}
addNumbers(10, 20);
// Task 9
function displayValues(a, b, c) {
    console.log(a, b, c);
}
displayValues(10, 20, 30);
// Task 10
function employee(name, salary) {
    console.log("Name:", name);
    console.log("Salary:", salary);
}
employee("Bharath", 25000);
// Task 11
function multiplyNumbers(a, b, c) {
    console.log(a * b * c);
}
multiplyNumbers(2, 3, 4);
// Task 12
function welcomeName(name) {
    console.log("Welcome " + name);
}
welcomeName("Bharath");
// Task 13
function threeParameters(a, b, c) {
    console.log(a, b, c);
}
threeParameters(10, 20);
// Task 14
function twoParameters(a, b) {
    console.log(a, b);
}
twoParameters(10, 20, 30);
// PART 3 – RETURN STATEMENT
// Task 15
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
// Task 16
function subtract(a, b) {
    return a - b;
}
console.log(subtract(20, 10));
// Task 17
function multiply(a, b) {
    return a * b;
}
let result = multiply(5, 4);
console.log(result);
// Task 18
function getAge() {
    return 23;
}
console.log(getAge());
// Task 19
function divide(a, b) {
    return a / b;
}
console.log(divide(20, 5));
// Task 20
function getNumber() {
    return 100;
}
function printNumber() {
    console.log(getNumber());
}
printNumber();
// PART 4 – SCOPE AND HOISTING
// Task 21
{
    var blockName = "Bharath";
}
console.log(blockName);
// Task 22
{
    let blockAge = 23;
}
// console.log(blockAge); // ReferenceError
// Task 23
{
    const blockCity = "Salem";
}
// console.log(blockCity); // ReferenceError
// Task 24
function showSalary() {
    var salary = 25000;
    console.log(salary);
}
showSalary();
// console.log(salary); // ReferenceError
// Task 25
console.log(myName);
var myName = "Bharath";
// Task 26
// console.log(myAge); // ReferenceError
let myAge = 23;
// console.log(myCity); // ReferenceError
const myCity = "Salem";
// PART 5 – FUNCTION TYPES
// Task 27 – Named Function
function showName(name) {
    console.log(name);
}
showName("Bharath");
// Task 28 – Anonymous Function
let showWelcome = function(name) {
    console.log("Welcome " + name);
};
showWelcome("Bharath");
// Task 29 – Arrow Function
let addValues = (a, b) => {
    console.log(a + b);
};
addValues(10, 20);
// Task 30 – Three Function Types
// Named Function – Subtraction
function subtraction(a, b) {
    console.log(a - b);
}
subtraction(20, 10);
// Anonymous Function – Multiplication
let multiplicationTask = function(a, b) {
    console.log(a * b);
};
multiplicationTask(5, 4);
// Arrow Function – Division
let division = (a, b) => {
    console.log(a / b);
};
division(20, 5);