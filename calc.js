let disArray = [];

let calc = {
    firstNumber: 10,
    secondNumber: 20,
    operator: '/'
};

const screen = document.querySelector(".screen");
const button = document.querySelectorAll(".btn");

button.forEach( (btn) => {
    btn.addEventListener('click', display);
})

function display (e){
    disArray.push(e.target.textContent);
    screen.textContent = disArray.join(" ");
}
 

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

operate(calc.firstNumber,calc.secondNumber,calc.operator);