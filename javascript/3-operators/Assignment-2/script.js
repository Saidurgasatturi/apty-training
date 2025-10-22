function getValues() {
  let val1 = parseFloat(document.getElementById("value1").value);
  let val2 = parseFloat(document.getElementById("value2").value);
  return [val1, val2];
}

function addAssign() {
  let [a, b] = getValues();
  a += b;
  document.getElementById("result").innerHTML = `Result (value1 += value2): ${a}`;
}

function subtractAssign() {
  let [a, b] = getValues();
  a -= b;
  document.getElementById("result").innerHTML = `Result (value1 -= value2): ${a}`;
}

function multiplyAssign() {
  let [a, b] = getValues();
  a *= b;
  document.getElementById("result").innerHTML = `Result (value1 *= value2): ${a}`;
}

function divideAssign() {
  let [a, b] = getValues();
  if (b === 0) {
    document.getElementById("result").innerHTML = "Error: Cannot divide by zero!";
  } else {
    a /= b;
    document.getElementById("result").innerHTML = `Result (value1 /= value2): ${a}`;
  }
}

function modulusAssign() {
  let [a, b] = getValues();
  a %= b;
  document.getElementById("result").innerHTML = `Result (value1 %= value2): ${a}`;
}

function incrementAssign() {
  let a = parseFloat(document.getElementById("value1").value);
  a++;
  document.getElementById("result").innerHTML = `Result (value1++): ${a}`;
}

function decrementAssign() {
  let a = parseFloat(document.getElementById("value1").value);
  a--;
  document.getElementById("result").innerHTML = `Result (value1--): ${a}`;
}
