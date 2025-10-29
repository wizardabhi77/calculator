const opArray = ['+','-','/','*','=','CLEAR'];
let calc = {
    firstNumber: 0,
    secondNumber: 0,
    operator: '',
    disNum : '',
    opToggle: false
};
let disString = '';

const screen = document.querySelector(".screen");
const button = document.querySelectorAll(".btn");

button.forEach( (btn) => {
    btn.addEventListener('click', display);
})

function display (e){
   
    let text = e.target.textContent;
    disString += text;
    if(!opArray.includes(text)){
        if(!calc.operator){
        calc.disNum += text;
        calc.firstNumber= Number(calc.disNum);
        }
        else {
            
            calc.disNum += text;
            calc.secondNumber = Number(calc.disNum);

        }
    }
    else {
        if(text === '=') {
            if(opArray.includes(disString[disString.length-2])){
                calc.operator = '';
                calc.firstNumber = 0;
                calc.secondNumber = 0;
                screen.textContent = 'ERROR';
                return null;
            }
            operate(calc);
            calc.operator = '';
            calc.firstNumber = 0;
            calc.secondNumber = 0;
            screen.textContent = calc.disNum;
            calc.disNum = '';
            return null;
        }
        else if(text === 'CLEAR') {
            calc.firstNumber = 0;
            calc.secondNumber = 0;
            calc.operator = '';
            screen.textContent = 'DISPLAY';
            return null;
        }
        else {
            if(opArray.includes(disString[disString.length-2])){
                 calc.operator = text;
                 return null;
            }
            else{
                operate(calc);
                calc.operator = text;
                screen.textContent = calc.firstNumber;
                calc.disNum = '';
                return null;
            }
        }
    }
    screen.textContent = calc.disNum;
}
 

function operate (mathExp) {

    switch (mathExp.operator){
        case '+': add(mathExp.firstNumber, mathExp.secondNumber);
                    break;
        case '-': subtract(mathExp.firstNumber, mathExp.secondNumber);
                    break;
        case '*': mutliply(mathExp.firstNumber, mathExp.secondNumber);
                    break;
        case '/': divide(mathExp.firstNumber, mathExp.secondNumber);
                    break;
        default:
            return console.log('not a valid operator');
        }

    }


function add (firstNumber, secondNumber) {
    calc.disNum = firstNumber + secondNumber;
    calc.firstNumber= calc.disNum;
}

function subtract (firstNumber, secondNumber) {
     calc.disNum = firstNumber - secondNumber;
    calc.firstNumber= calc.disNum;
}

function mutliply (firstNumber, secondNumber) {
     calc.disNum = firstNumber * secondNumber;
    calc.firstNumber= calc.disNum;
}

function divide (firstNumber, secondNumber) {
     calc.disNum = (firstNumber / secondNumber).toFixed(2);
    calc.firstNumber= calc.disNum;
}
