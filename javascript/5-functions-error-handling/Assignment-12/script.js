
function processArray(numbers, callback) {
  return callback(numbers);
}

function filterNumbers() {
  const numbersInput = document.getElementById("numbers").value.trim();
  const limit = Number(document.getElementById("limit").value);
  const resultDiv = document.getElementById("result");

  if (!numbersInput || isNaN(limit)) {
    resultDiv.innerHTML = "<p style='color:red;'>Please enter valid numbers and limit!</p>";
    return;
  }

  const numbersArray = numbersInput.split(",").map(num => Number(num.trim()));

  const filtered = processArray(numbersArray, nums => nums.filter(n => n <= limit));

  resultDiv.innerText = `Filtered Array: [ ${filtered.join(", ")} ]`;
}
