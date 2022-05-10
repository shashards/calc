// Addition

const addition = function(a, b){
    return a + b;
};

// Subtraction

const subtraction = function(a, b){
    return a - b
};

//Multiply

const  multiply = function(a, b){
    return a * b
};

//Divide

const divide = function(a, b){
    return a / b;
};

// Operate

const operate = function(operatorValue, a, b){
    switch (operatorValue){
        case "/":
            return divide(a, b);
        case "+":
            return addition(a, b);
        case "-":
            return subtraction(a, b);
        case "X":
            return multiply(a, b);
    };
};



// Holding Values

let displayValue = "0";
let displayHistory = "";
let firstValue = undefined;
let secondValue = undefined;
let operatorValue = undefined;

// Obtain buttons and elements

const numBtns = document.querySelectorAll('[data-number]');
const currentNumScreen = document.querySelector('.current-number');
const previousNumScreen = document.querySelector('.previous-number');
const opBtns = document.querySelectorAll('[data-operator]');
const equalBtn = document.querySelector('#equal');

// Set zero values

currentNumScreen.innerText = displayValue

// Number pressed functions

const numPressedFirst = (e) => {
    currentNumScreen.innerText = displayValue = "";
    currentNumScreen.innerText += e.target.textContent;
    displayValue += e.target.textContent;
    displayValue = Number(displayValue);
    firstValue = displayValue;
}

const numPressedSecond = (e) => {
    if(firstValue !== undefined){
        let secondNum = e.target.textContent;
        secondValue = Number(secondNum);
        currentNumScreen.innerText = secondNum;
    }
    
}

const numPressed = (e) => {
    if(firstValue === undefined){
        numPressedFirst(e);
    } else {
        numPressedSecond(e);
    }
}

numBtns.forEach(btn => btn.addEventListener('click', numPressed));

// Operator pressed fucntions

const operatorPressed = (e) => {
    operatorValue = e.target.textContent;
    displayHistory = firstValue + " " + operatorValue;
    previousNumScreen.textContent = displayHistory;
    displayValue = "";
    currentNumScreen.innerText = displayValue;
}

opBtns.forEach(btn => btn.addEventListener('click', operatorPressed));

// Equals pressed functions 

const equalPressed = (e) => {
    previousNumScreen.innerText = displayHistory + " " + secondValue;
    return currentNumScreen.innerText = operate(operatorValue, firstValue, secondValue);
        
}

equalBtn.addEventListener('click', equalPressed);
