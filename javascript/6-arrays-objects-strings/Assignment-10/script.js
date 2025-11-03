function comparePerformance() {
  const size = parseInt(document.getElementById("arraySize").value);
  const output = document.getElementById("output");

  if (!size || size <= 0) {
    alert("Please enter a valid array size!");
    return;
  }

  const arr = Array.from({ length: size }, (_, i) => i);

  let result = "";
  let start = performance.now();
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let forTime = performance.now() - start;
  result += `for loop: ${forTime.toFixed(3)} ms\n`;
  start = performance.now();
  sum = 0;
  for (const num of arr) {
    sum += num;
  }
  let forOfTime = performance.now() - start;
  result += `for...of loop: ${forOfTime.toFixed(3)} ms\n`;

  start = performance.now();
  sum = 0;
  arr.forEach(num => sum += num);
  let forEachTime = performance.now() - start;
  result += `forEach loop: ${forEachTime.toFixed(3)} ms\n`;
  result += `\nFastest: ${Math.min(forTime, forOfTime, forEachTime) === forTime ? "for loop" : Math.min(forOfTime, forEachTime) === forOfTime ? "for...of loop" : "forEach loop"}`;

  output.textContent = result;
}
