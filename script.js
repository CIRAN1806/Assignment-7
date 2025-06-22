function calculate(operator) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = "Please enter both numbers.";
  } else {
    switch (operator) {
      case '+': result = num1 + num2; break;
      case '-': result = num1 - num2; break;
      case '*': result = num1 * num2; break;
      case '/': result = num2 !== 0 ? num1 / num2 : "Cannot divide by 0"; break;
    }
  }

  document.getElementById("result").textContent = "Result: " + result;
}

function square() {
  const num1 = parseFloat(document.getElementById("num1").value);
  if (!isNaN(num1)) {
    document.getElementById("result").textContent = "Result: " + (num1 * num1);
  } else {
    document.getElementById("result").textContent = "Enter a number in box 1.";
  }
}

function cube() {
  const num1 = parseFloat(document.getElementById("num1").value);
  if (!isNaN(num1)) {
    document.getElementById("result").textContent = "Result: " + (num1 * num1 * num1);
  } else {
    document.getElementById("result").textContent = "Enter a number in box 1.";
  }
}
