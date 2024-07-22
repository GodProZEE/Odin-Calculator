function add(a, b) {
    console.log(a+b);
    return a+b;
}

function subtract(a, b) {
    console.log(a-b);
    return a-b;
}

function multiply(a, b) {
    console.log(a*b);
    return a*b;
}

function divide(a, b) {
    console.log(a/b);
    return a/b;
}




function operate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return(add(num1, num2));
            break;

        case '-':
            return(subtract(num1, num2));
            break;
        
        case '*':
            return(multiply(num1, num2));
            break;
        
        case '/':
            return(divide(num1, num2));
            break;

    
        default:
            break;
    }
}

const displayArea = document.querySelector('.displayArea')
let result;
let displayValue = '';
let secondDisplay = ''
const container = document.querySelector('.container')

let firstNumber = '';
let operator = '';
let secondNumber;
let actualFirstNumber = null;
let actualSecondNumber = null;
let secondFlag = false
console.log(actualFirstNumber === null)
let secondOperator;
let tempOp;
let arrayOfOperator;
let firstOperator;

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('operation')) {
        operator += e.target.textContent;
    } else {
    if (e.target.classList.contains('number') && operator === '') {
        displayValue += e.target.textContent;
        displayArea.textContent = displayValue;
        firstNumber = displayValue;
        actualFirstNumber = Number(firstNumber)

    } else {
        if (operator !== '' && !(e.target.classList.contains('equals'))) {
 
                secondDisplay += e.target.textContent;
                displayArea.textContent = secondDisplay;
                secondNumber = secondDisplay;
                actualSecondNumber = Number(secondNumber)

        } else {
            if (e.target.classList.contains('equals') && (typeof actualSecondNumber === 'number' && operator !== '=')) {
                console.log('uhm');
                arrayOfOperator = operator.split('')
                firstOperator = arrayOfOperator[0]
                if (arrayOfOperator.length >= 2) {
                    secondOperator = arrayOfOperator[1, arrayOfOperator.length - 1]
                    actualSecondNumber = Number(secondOperator + actualSecondNumber)
                }
                console.log(arrayOfOperator)
                console.log(firstOperator)
                console.log(secondOperator)
                console.log(operator)
                if (actualFirstNumber === null) {
                    actualFirstNumber = 0;
                    result = operate(actualFirstNumber, firstOperator, actualSecondNumber);
                    actualFirstNumber = Number(result);
                    displayArea.textContent = Number(result);
                    operator = ''
                    secondDisplay = ''
                    actualSecondNumber = null;
                    arrayOfOperator = []
                    firstOperator = ''
                    secondOperator = ''
                } else {
                    result = operate(actualFirstNumber, firstOperator, actualSecondNumber);
                    actualFirstNumber = Number(result);
                    displayArea.textContent = Number(result);
                    operator = ''
                    secondDisplay = ''
                    actualSecondNumber = null;
                    displayValue = ''
                    arrayOfOperator = []
                    firstOperator = ''
                    secondOperator = ''
                }
                
            }

        }
    }
    }
})


