function calculate(operator) {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").innerHTML = "Please enter valid numbers!";
    return;
  }

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero!";
      break;
    case '%':
      result = num1 % num2;
      break;
    default:
      result = "Invalid Operator!";
  }

  document.getElementById("result").innerHTML = `Result: <strong>${result}</strong>`;
}
