function getValues() {
  let val1 = parseFloat(document.getElementById("value1").value);
  let val2 = parseFloat(document.getElementById("value2").value);
  return [val1, val2];
}

function add() {
  let [a, b] = getValues();
  document.getElementById("result").innerHTML = `Result: ${a + b}`;
}

function subtract() {
  let [a, b] = getValues();
  document.getElementById("result").innerHTML = `Result: ${a - b}`;
}

function multiply() {
  let [a, b] = getValues();
  document.getElementById("result").innerHTML = `Result: ${a * b}`;
}

function divide() {
  let [a, b] = getValues();
  if (b === 0) {
    document.getElementById("result").innerHTML = "Error: Cannot divide by zero!";
  } else {
    document.getElementById("result").innerHTML = `Result: ${a / b}`;
  }
}

function modulus() {
  let [a, b] = getValues();
  document.getElementById("result").innerHTML = `Result: ${a % b}`;
}

function increment() {
  let a = parseFloat(document.getElementById("value1").value);
  a++;
  document.getElementById("result").innerHTML = `Result (value1++): ${a}`;
}

function decrement() {
  let a = parseFloat(document.getElementById("value1").value);
  a--;
  document.getElementById("result").innerHTML = `Result (value1--): ${a}`;
}
