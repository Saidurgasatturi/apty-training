function checkOddEven() {
  let number = Number(document.getElementById("number").value);
  let result = "";

  if (isNaN(number)) {
    result = "⚠️ Please enter a valid number!";
  } else {
    result = (number % 2 === 0)
      ? `${number} is an Even number ✅`
      : `${number} is an Odd number 🔹`;
  }

  document.getElementById("result").innerHTML = result;
}
