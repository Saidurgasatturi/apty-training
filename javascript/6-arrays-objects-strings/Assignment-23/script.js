function getUnicodeValues() {
  const inputStr = document.getElementById("stringInput").value.trim();
  const result = document.getElementById("result");

  if (!inputStr) {
    result.innerText = "Please enter a string.";
    return;
  }
  const unicodeArray = [];
  for (let i = 0; i < inputStr.length; i++) {
    unicodeArray.push(inputStr.charCodeAt(i));
  }

  result.innerText = `[ ${unicodeArray.join(", ")} ]`;
}
