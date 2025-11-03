function sortString() {
  const input = document.getElementById("inputStr").value;

  if (input.trim() === "") {
    document.getElementById("result").innerText = "Please enter a string.";
    return;
  }
  const sortedString = input.split("").sort().join("");

  document.getElementById("result").innerText = sortedString;
}
