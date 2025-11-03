function findFirstAndLast() {
  const input = document.getElementById("inputStr").value.trim();
  
  if (input === "") {
    document.getElementById("result").innerText = "null";
    return;
  }

  const firstChar = input.charAt(0);
  const lastChar = input.charAt(input.length - 1);
  
  document.getElementById("result").innerText = `${firstChar} ${lastChar}`;
}
