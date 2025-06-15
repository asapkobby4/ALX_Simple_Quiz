// Arithmetic operation functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return "Cannot divide by zero";
    }
    return number1 / number2;
}

// Utility function to get input numbers
function getInputValues() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return { number1, number2 };
}

// Result display reference
const resultDisplay = document.getElementById('calculation-result');

// Event listeners
document.getElementById('add').addEventListener('click', function () {
    const { number1, number2 } = getInputValues();
    resultDisplay.textContent = add(number1, number2);
});

document.getElementById('subtract').addEventListener('click', function () {
    const { number1, number2 } = getInputValues();
    resultDisplay.textContent = subtract(number1, number2);
});

document.getElementById('multiply').addEventListener('click', function () {
    const { number1, number2 } = getInputValues();
    resultDisplay.textContent = multiply(number1, number2);
});

document.getElementById('divide').addEventListener('click', function () {
    const { number1, number2 } = getInputValues();
    const result = divide(number1, number2);
    resultDisplay.textContent = result;
});
