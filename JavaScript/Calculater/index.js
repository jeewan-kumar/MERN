function add() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let result = num1 + num2;
  document.getElementById("result").textContent = "Result: " + result;
}

function subtract() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let result = num1 - num2;
  document.getElementById("result").textContent = "Result: " + result;
}

function multiply() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let result = num1 * num2;
  document.getElementById("result").textContent = "Result: " + result;
}

function divide() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  if (num2 === 0) {
    document.getElementById("result").textContent =
      "Result: Cannot divide by zero";
  } else {
    let result = num1 / num2;
    document.getElementById("result").textContent = "Result: " + result;
  }
}
