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


let firstNumber;
let operator;
let secondNumber;

function operate(num1, operator, num2) {
    switch (operator) {
        case '+':
            add(num1, num2);
            break;

        case '-':
            subtract(num1, num2);
            break;
        
        case '*':
            multiply(num1, num2);
            break;
        
        case '/':
            divide(num1, num2);
            break;

    
        default:
            break;
    }
}

const displayArea = document.querySelector('.displayArea')
displayArea.textContent = 'hewwo'
