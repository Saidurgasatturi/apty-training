function processNumbers() {
  const input = document.getElementById("numbers").value;
  const output = document.getElementById("output");

  const arr = input.split(",").map(Number);
  const result = arr
    .filter(num => num % 2 === 0)  
    .map(num => num * 2)          
    .reduce((sum, num) => sum + num, 0); 


  const evens = arr.filter(num => num % 2 === 0);
  const doubled = evens.map(num => num * 2);

  output.textContent = 
`Original Array: [${arr.join(", ")}]
Even Numbers: [${evens.join(", ")}]
Doubled Numbers: [${doubled.join(", ")}]
Sum of Doubled Evens: ${result}`;
}
