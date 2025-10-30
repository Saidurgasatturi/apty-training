
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function generateFibonacci() {
  const num = parseInt(document.getElementById("num").value);
  let series = [];

  for (let i = 0; i < num; i++) {
    series.push(fibonacci(i));
  }

  document.getElementById("result").innerHTML = 
    `Fibonacci Series up to ${num} terms:<br>${series.join(', ')}`;

  console.log("Fibonacci Series:", series);
}
