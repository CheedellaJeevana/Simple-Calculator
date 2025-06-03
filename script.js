const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operationSelect = document.getElementById('operation');
const resultDisplay = document.getElementById('result');

function calculate() {
  const val1 = parseFloat(num1Input.value);
  const val2 = parseFloat(num2Input.value);
  const op = operationSelect.value;

  if (isNaN(val1) || isNaN(val2)) {
    resultDisplay.textContent = 'Result: --';
    return;
  }

  let result;
  switch(op) {
    case 'add':
      result = val1 + val2;
      break;
    case 'subtract':
      result = val1 - val2;
      break;
    case 'multiply':
      result = val1 * val2;
      break;
    case 'divide':
      if (val2 === 0) {
        resultDisplay.textContent = 'Result: Cannot divide by zero';
        return;
      }
      result = val1 / val2;
      break;
    default:
      result = '--';
  }
  // Format result to max 6 decimals if float
  if (typeof result === 'number' && !Number.isInteger(result)) {
    result = result.toFixed(6).replace(/\.?0+$/, '');
  }
  resultDisplay.textContent = 'Result: ' + result;
}

num1Input.addEventListener('input', calculate);
num2Input.addEventListener('input', calculate);
operationSelect.addEventListener('change', calculate);

// Initial calculation update on page load if inputs filled
window.addEventListener('load', calculate);
