

function outerFunction(word1) {
  
  return function middleFunction(word2) {

    return function innerFunction(word3) {
      return `${word1} ${word2} ${word3}!`; 
    };
  };
}

function generateMessage() {
  const first = document.getElementById("first").value.trim();
  const second = document.getElementById("second").value.trim();
  const third = document.getElementById("third").value.trim();

  if (!first || !second || !third) {
    document.getElementById("result").innerHTML = "<p style='color:red;'>Please fill all fields!</p>";
    return;
  }

  const message = outerFunction(first)(middle = second)(third);

  document.getElementById("result").innerText = `Result: ${message}`;
}
