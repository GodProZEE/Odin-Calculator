function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}


function operate(firstNumber, operator, secondNumber) {
    switch (operator) {
        case '+':
            return add(firstNumber, secondNumber)

        case '-':
            return subtract(firstNumber, secondNumber)  

        case '*':
            return multiply(firstNumber, secondNumber)
            
        case '/':
            return divide(firstNumber, secondNumber)
    
        default:
            break;
    }
}
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let operatorArray = ["+", "-", "/", "*"];

const calculator = document.querySelector('.entireCalculator');
const container = document.querySelector('.container');
let displayArea = document.querySelector('.displayArea')

let statement = ''
let firstNumber = ''
let secondNumber = ''
let firstOperator = ''  // This is for the sign of the first number (positive by default)
let secondOperator = '' // This is for the actual operation being performed
let thirdOperator = ''  // This is for the sign of the second number (positive by default)
let result = ''
let actualFirstNumber = null;
let actualSecondNumber = null;
let displayValue = ''
let secondDisplay = ''
let decimal  = '.'
function searchForDecimal(string) {
    let flag = false;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === decimal) {
            flag = true;
        }
    }
    return flag;
}
function operateAndReduce() {
    result = Math.round(((operate(actualFirstNumber, secondOperator, actualSecondNumber)) + Number.EPSILON) * 10000) / 10000
    console.log(statement.at(-1))
    console.log(result)
    if (isNaN(result)) {
        displayArea.setAttribute('style', 'font-size: 18px')
        result = "Bruh what are you trying to do"
    } else {
        if (result === Infinity) {
            displayArea.setAttribute('style', 'font-size: 18px')
            result = "Seriously wth are you trying to do"
        }
    }

    if (operatorArray.includes(statement.at(-1))) {
        secondOperator = statement.at(-1);
    } else {
        secondOperator = ''
    }
    actualFirstNumber = Number(result);
    displayArea.textContent = result;
    actualSecondNumber = null;
    displayValue = actualFirstNumber;
    secondDisplay = ''
    secondNumber = ''
    statement = String(result)
    thirdOperator = ''

}
function clearEverything() {
    statement = ''
    firstNumber = ''
    secondNumber = ''
    firstOperator = ''  // This is for the sign of the first number (positive by default)
    secondOperator = '' // This is for the actual operation being performed
    thirdOperator = ''  // This is for the sign of the second number (positive by default)
    result = ''
    actualFirstNumber = null;
    actualSecondNumber = null;
    displayValue = ''
    secondDisplay = ''
    decimal  = '.'
    displayArea.textContent = ''
}

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('clickNo')) {
        displayArea.setAttribute('style', 'font-size: 18px')
        displayArea.textContent = 'What do you get by doing stuff like this';
        setTimeout(clearEverything, 3000)
    } else {
        displayArea.setAttribute('style', 'font-size: 40px')
    }

    if (e.target.classList.contains('clear')) {
        clearEverything()
    } else {
    if (e.target.classList.contains('number') || e.target.classList.contains('operation') || e.target.classList.contains('equals') || e.target.classList.contains('decimal')) {
        statement += e.target.textContent;
        if (operatorArray.includes(statement[0]) && firstOperator == '') {
            firstOperator = statement[0];
            statement = statement.slice(1)
            displayValue += statement;
            displayArea.textContent = displayValue;
            
        } else {
            if (firstOperator === '') {
                firstOperator = "+";
            }
        }

        console.log(searchForDecimal(firstNumber))
        if ((e.target.classList.contains('number') || e.target.classList.contains('decimal')) && secondOperator === '' && thirdOperator === '') {
                if (searchForDecimal(firstNumber) === true && e.target.classList.contains('decimal')) {
                } else {
                displayValue += e.target.textContent;
                firstNumber = firstOperator + displayValue;
                if (firstNumber[0] === '+') {
                displayArea.textContent = firstNumber.slice(1);
                } else {
                    displayArea.textContent = firstNumber;
                }
            }
            
            

            actualFirstNumber = Number(firstNumber)
        } else {
            if (e.target.classList.contains('operation') && actualFirstNumber !== null && secondOperator == '' && thirdOperator === '') {
                secondOperator = e.target.textContent;                
            } else {
                if (e.target.classList.contains('operation') && secondOperator !== '' && thirdOperator == '') {
                    thirdOperator = e.target.textContent;
                    console.log("thirdOperator being set automatically")
                    
                }
        }

            if ((e.target.classList.contains('number') || e.target.classList.contains('decimal')) && secondOperator !== '') {
                if (thirdOperator === '') {
                    thirdOperator = '+'
                }
                if (searchForDecimal(secondNumber) === true && e.target.classList.contains('decimal')) {
                } else {
                secondDisplay += e.target.textContent;
                secondNumber = thirdOperator + secondDisplay
                if (secondNumber[0] === '+') {
                    displayArea.textContent = secondNumber.slice(1);
                } else {
                    displayArea.textContent = secondNumber;
                }
            }
                

                actualSecondNumber = Number(secondNumber);
            }

                if (actualFirstNumber !== null && actualSecondNumber !== null && secondOperator !== '' && thirdOperator !== '' && ((e.target.classList.contains('operation')) || e.target.classList.contains('equals'))) {
                    operateAndReduce()
                }
                                

        }
    }
}
}) 