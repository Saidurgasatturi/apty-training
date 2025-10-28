function countCharacters() {
  const text = document.getElementById("textInput").value;
  const resultDiv = document.getElementById("result");

  if (text.trim() === "") {
    resultDiv.innerHTML = "⚠️ Please enter a string!";
    return;
  }

  const frequency = {};

  for (let index in text) {
    let char = text[index];
    frequency[char] = (frequency[char] || 0) + 1;
  }

  let output = `<h3>Character Frequency:</h3><ul>`;
  for (let char in frequency) {
    output += `<li>'${char}' : ${frequency[char]}</li>`;
  }
  output += `</ul>`;

  resultDiv.innerHTML = output;
}
