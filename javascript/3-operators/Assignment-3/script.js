
function convertValue(value, type) {
  switch (type) {
    case "number":
      return Number(value);
    case "boolean":
      return value.toLowerCase() === "true";
    default:
      return String(value);
  }
}
function getConvertedValues() {
  const val1 = document.getElementById("value1").value;
  const val2 = document.getElementById("value2").value;
  const type1 = document.getElementById("type1").value;
  const type2 = document.getElementById("type2").value;

  const converted1 = convertValue(val1, type1);
  const converted2 = convertValue(val2, type2);

  return [converted1, converted2];
}

function equal() {
  const [a, b] = getConvertedValues();
  const result = a == b;
  displayResult(`${a} == ${b} ➜ ${result}`);
}

function strictEqual() {
  const [a, b] = getConvertedValues();
  const result = a === b;
  displayResult(`${a} === ${b} ➜ ${result}`);
}

function notEqual() {
  const [a, b] = getConvertedValues();
  const result = a != b;
  displayResult(`${a} != ${b} ➜ ${result}`);
}

function strictNotEqual() {
  const [a, b] = getConvertedValues();
  const result = a !== b;
  displayResult(`${a} !== ${b} ➜ ${result}`);
}

function greaterThan() {
  const [a, b] = getConvertedValues();
  const result = a > b;
  displayResult(`${a} > ${b} ➜ ${result}`);
}

function lessThan() {
  const [a, b] = getConvertedValues();
  const result = a < b;
  displayResult(`${a} < ${b} ➜ ${result}`);
}

function greaterOrEqual() {
  const [a, b] = getConvertedValues();
  const result = a >= b;
  displayResult(`${a} >= ${b} ➜ ${result}`);
}

function lessOrEqual() {
  const [a, b] = getConvertedValues();
  const result = a <= b;
  displayResult(`${a} <= ${b} ➜ ${result}`);
}

function displayResult(text) {
  document.getElementById("result").innerHTML = text;
}
