
function handleText(input, callback = (text) => text.toUpperCase()) {

  return callback(input);
}

function processInput() {
  const inputText = document.getElementById("userInput").value.trim();

  if (!inputText) {
    document.getElementById("result").innerHTML = "<p style='color:red;'>Please enter some text!</p>";
    return;
  }

  const result1 = handleText(inputText);



  document.getElementById("result").innerText = 
    `Processed Text: ${result1}`;

  console.log("Original:", inputText);
  console.log("Processed:", result1);
}
