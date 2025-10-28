function findPrimes() {
  const start = parseInt(document.getElementById("start").value);
  const end = parseInt(document.getElementById("end").value);
  const resultDiv = document.getElementById("result");

  if (isNaN(start) || isNaN(end) || start < 2 || end < 2 || start > end) {
    resultDiv.innerHTML = "⚠️ Please enter a valid range (start >= 2 and start ≤ end)";
    return;
  }

  let primes = [];


  for (let num = start; num <= end; num++) {
    let isPrime = true;

    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes.push(num);
    }
  }

  if (primes.length > 0) {
    resultDiv.innerHTML = `<h3>Prime Numbers between ${start} and ${end}:</h3> ${primes.join(", ")}`;
  } else {
    resultDiv.innerHTML = `No prime numbers found in the range ${start} to ${end}.`;
  }
}
