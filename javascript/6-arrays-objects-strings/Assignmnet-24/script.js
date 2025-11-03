function padString() {
  const inputStr = document.getElementById("stringInput").value.trim();
  const result = document.getElementById("result");

  if (!inputStr) {
    result.innerText = "Please enter a string.";
    return;
  }

  const paddedString = inputStr.padStart(10, "0");

  result.innerText = `Padded String: ${paddedString}`;
}
