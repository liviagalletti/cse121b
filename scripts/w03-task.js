/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1+number2;
}

function addNumbers(){
    let add1 = Number(document.getElementById("add1").value);
    let add2 = Number(document.getElementById("add2").value);
    document.getElementById("sum").innerHTML = add(add1,add2);
}

document.getElementById("addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (number1, number2){
    return number1 - number2;
}

function subtractNumbers(){
    let subtract1 = Number(document.getElementById("subtract1").value);
    let subtract2 = Number(document.getElementById("subtract2").value);
    document.getElementById("difference").innerHTML = subtract(subtract1,subtract2);
}

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = function (number1, number2){
    return number1*number2
}

const multiplyNumbers = function(){
    let factor1 = Number(document.getElementById("factor1").value);
    let factor2 = Number(document.getElementById("factor2").value);
    document.getElementById("product").innerHTML = multiply(factor1,factor2);
}

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = function (number1, number2){
    return number1*number2
}

const divideNumbers = function(){
    let dividend = Number(document.getElementById("dividend").value);
    let divisor = Number(document.getElementById("divisor").value);
    document.getElementById("quotient").innerHTML = divide(dividend,divisor);
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);


/* Decision Structure */
let today = new Date();
let currentYear = "";
currentYear = today.getFullYear();
document.getElementById("year").textContent = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById("array").innerHTML = numbersArray;

/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 === 1);

/* Output Evens Only Array */

document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0 );

/* Output Sum of Org. Array */
let sum = numbersArray.reduce((sum, number) => sum + number);
document.getElementById("sumOfArray").innerHTML = sum;

/* Output Multiplied by 2 Array */
let multiplyArray = numbersArray.map(number =>number * 2);
document.getElementById("multiplied").innerHTML = multiplyArray;

/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = multiplyArray.reduce((sum, number) => sum + number, 0);
document.getElementById("sumOfMultiplied").innerHTML = sumOfMultiplied;