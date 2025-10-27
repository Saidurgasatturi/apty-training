function generateTable() {
  const num = Number(document.getElementById("number").value);
  const resultDiv = document.getElementById("result");
  let output = "";

  if (isNaN(num) || num === 0) {
    resultDiv.innerHTML = "⚠️ Please enter a valid non-zero number!";
    return;
  }

  output += `<h3>Multiplication Table for ${num}</h3>`;
  output += "<table style='margin: 0 auto; text-align:left;'>";

  for (let i = 1; i <= 10; i++) {
    output += `<tr><td>${num} × ${i}</td><td>= ${num * i}</td></tr>`;
  }

  output += "</table>";

  resultDiv.innerHTML = output;
}
