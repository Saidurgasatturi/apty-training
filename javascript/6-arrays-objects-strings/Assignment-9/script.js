function transposeMatrix(matrix) {
  let transposed = [];

  for (let i = 0; i < matrix[0].length; i++) {
    let newRow = [];
    for (let j = 0; j < matrix.length; j++) {
      newRow.push(matrix[j][i]);
    }

    transposed.push(newRow);
  }

  return transposed;
}

function handleTranspose() {
  const inputText = document.getElementById("matrixInput").value.trim();
  if (!inputText) {
    alert("Please enter a matrix!");
    return;
  }

  const rows = inputText.split("\n").map(row => row.split(",").map(Number));
  
  document.getElementById("originalOutput").textContent = JSON.stringify(rows, null, 2);

  try {
    const result = transposeMatrix(rows);
    document.getElementById("transposedOutput").textContent = JSON.stringify(result, null, 2);
  } catch (error) {
    alert("Error: Please ensure the matrix is rectangular (all rows same length).");
  }
}
