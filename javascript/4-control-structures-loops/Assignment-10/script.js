function calculateArray() {
  const input = document.getElementById("numbers").value.trim();
  const result = document.getElementById("result");

  if (input === "") {
    result.innerHTML = "⚠️ Please enter some numbers separated by commas!";
    return;
  }

  const numArray = input.split(",").map(item => Number(item.trim()));

  if (numArray.some(isNaN)) {
    result.innerHTML = "⚠️ Please enter only valid numbers separated by commas!";
    return;
  }

  let sum = 0;

  for (let num of numArray) {
    sum += num;
  }

  const average = sum / numArray.length;

  result.innerHTML = `
    ✅ Entered Numbers: [${numArray.join(", ")}] <br>
    ➕ Sum: <strong>${sum}</strong><br>
    ➗ Average: <strong>${average.toFixed(2)}</strong>
  `;
}
