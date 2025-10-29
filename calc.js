let num1 = 10;
let num2 = 20;
let operator = "/";

function operate (firstNumber,secondNumber,operator) {

    switch (operator){
        case '+': console.log(add(firstNumber, secondNumber));
                    break;
        case '-': console.log(subtract(firstNumber, secondNumber));
                    break;
        case '*': console.log(mutliply(firstNumber, secondNumber));
                    break;
        case '/': console.log(divide(firstNumber, secondNumber));
                    break;
        default:
            return console.log('not a valid operator');
        }

    }


function add (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract (firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function mutliply (firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide (firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

operate(num1,num2,operator)