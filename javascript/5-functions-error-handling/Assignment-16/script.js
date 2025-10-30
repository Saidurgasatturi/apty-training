function calculate() {
  const num1 = document.getElementById("num1").value.trim();
  const num2 = document.getElementById("num2").value.trim();
  const operator = document.getElementById("operator").value;
  const result = document.getElementById("result");

  try {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) {
      throw new Error("❌ Invalid number input. Please enter numeric values.");
    }
    let output;
    switch (operator) {
      case "+":
        output = n1 + n2;
        break;
      case "-":
        output = n1 - n2;
        break;
      case "*":
        output = n1 * n2;
        break;
      case "/":
        if (n2 === 0) throw new Error("🚫 Division by zero is not allowed.");
        output = n1 / n2;
        break;
      default:
        throw new Error("⚠️ Unsupported operator. Use +, -, *, or /.");
    }

    result.innerHTML = `✅ Result: <b>${output}</b>`;
    result.className = "success";
  } 
  catch (error) {
    result.innerHTML = error.message;
    result.className = "error";
  }
}
