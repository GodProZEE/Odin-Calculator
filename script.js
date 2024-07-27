function add(a, b) {
    // console.log(a+b);
    return a+b;
}

function subtract(a, b) {
    // console.log(a-b);
    return a-b;
}

function multiply(a, b) {
    // console.log(a*b);
    return a*b;
}

function divide(a, b) {
    // console.log(a/b);
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
// console.log(actualFirstNumber === null)
let secondOperator;
let tempOp;
let arrayOfOperator;
let firstOperator;
let operationDone = false;
function operateAndReduce() {
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
    operationDone = false;
}
    
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
        if (operator.length <= 2 && !(e.target.classList.contains('equals')) && operationDone == false) {
 
                secondDisplay += e.target.textContent;
                displayArea.textContent = secondDisplay;
                secondNumber = secondDisplay;
                actualSecondNumber = Number(secondNumber)

        } else {
            if (e.target.classList.contains('equals') && (typeof actualSecondNumber === 'number' && operator !== '=')) {
                // console.log('uhm');
                console.log(operator);
                arrayOfOperator = operator.split('')
                firstOperator = arrayOfOperator[0]
                console.log(firstOperator)
                if (arrayOfOperator.length >= 2) {
                    secondOperator = arrayOfOperator[1, arrayOfOperator.length - 1]
                    // console.log(secondOperator)
                    actualSecondNumber = Number(secondOperator + actualSecondNumber)
                    console.log(actualSecondNumber)
                }
                // console.log(arrayOfOperator)
                // console.log(firstOperator)
                // console.log(operator)
                if (actualFirstNumber === null) {
                    actualFirstNumber = 0;
                    operateAndReduce()
                } else {
                    operateAndReduce()
                }
                
            } else {
                
                if (typeof actualSecondNumber === 'number' && operator.length > 1) {
                    let lastOperator = operator[operator.length - 1]
                    console.log(lastOperator);
                    operator = operator.slice(0, operator.length - 1)
                    arrayOfOperator = operator.split('')
                    firstOperator = arrayOfOperator[0]
                    if (arrayOfOperator.length >= 2) {
                        secondOperator = arrayOfOperator[1, arrayOfOperator.length - 1]
                        actualSecondNumber = Number(secondOperator + actualSecondNumber)
                    }
                    operateAndReduce()
                    operationDone = true;
                    operator = lastOperator;

                    secondDisplay += e.target.textContent
                    displayArea.textContent = secondDisplay;
                    secondNumber = secondDisplay;
                    actualSecondNumber = Number(secondNumber);
                }
            }

        }
    }
    
}
})


