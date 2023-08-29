const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;

    if (buttonText >= '0' && buttonText <= '9') {
      currentInput += buttonText;
      display.textContent = currentInput;
    } else if (buttonText === 'C') {
      clear();
    } else if (buttonText === '=') {
      calculate();
    } else {
      operator = buttonText;
      previousInput = currentInput;
      currentInput = '';
    }
  });
});

function clear() {
  currentInput = '';
  previousInput = '';
  operator = '';
  display.textContent = '0';
}

function calculate() {
  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);
  let result = 0;

  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '*') {
    result = num1 * num2;
  } else if (operator === '/') {
    result = num1 / num2;
  }

  display.textContent = result;
  currentInput = result.toString();
  previousInput = '';
  operator = '';
}

