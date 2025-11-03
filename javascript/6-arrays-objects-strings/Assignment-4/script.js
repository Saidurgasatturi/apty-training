function convertToSentence() {
  let input = document.getElementById("wordsInput").value;
  
  if (input.trim() === "") {
    document.getElementById("result").innerText = "⚠️ Please enter some words!";
    return;
  }

  let wordsArray = input.split(",").map(word => word.trim()).filter(Boolean);

  let sentence = wordsArray.join(" ");

  sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
  if (!sentence.endsWith(".")) sentence += ".";

  document.getElementById("result").innerText = sentence;
}
