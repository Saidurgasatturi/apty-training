function generatePyramid() {
  const rows = parseInt(document.getElementById("rows").value);
  const resultDiv = document.getElementById("result");

  if (isNaN(rows) || rows <= 0) {
    resultDiv.textContent = "⚠️ Please enter a valid positive number of rows.";
    return;
  }

  let pattern = "";

  for (let i = 1; i <= rows; i++) {

    for (let space = 1; space <= rows - i; space++) {
      pattern += " ";
    }

    for (let star = 1; star <= 2 * i - 1; star++) {
      pattern += "*";
    }
 
    pattern += "\n";
  }

  resultDiv.textContent = pattern;
}
