function calculateWordLengths() {
  const input = document.getElementById("inputStr").value.trim();
  
  if (input === "") {
    document.getElementById("result").innerText = "Please enter a sentence.";
    return;
  }

  const words = input.split(" ");
  const lengths = words.map(word => word.length);
  
  document.getElementById("result").innerText = lengths.join(" ");
}
