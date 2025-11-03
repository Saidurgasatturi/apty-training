function swapValues() {
  let a = parseInt(document.getElementById("numA").value);
  let b = parseInt(document.getElementById("numB").value);
  let resultElement = document.getElementById("result");

  if (isNaN(a) || isNaN(b)) {
    resultElement.innerText = "⚠️ Please enter valid numbers for both fields.";
    return;
  }

  let beforeSwap = `Before Swapping → a = ${a}, b = ${b}`;

 
  [a, b] = [b, a];


  let afterSwap = `After Swapping → a = ${a}, b = ${b}`;

  resultElement.innerText = `${beforeSwap}\n${afterSwap}`;
}
