function computeFactorial() {
  const input = document.getElementById("number");
  const out = document.getElementById("output");
  const raw = input.value.trim();

  if (raw === "") {
    out.innerHTML = `<p class="error">Please enter a number.</p>`;
    return;
  }

  const n = Number(raw);

  if (!Number.isFinite(n) || n < 0 || !Number.isInteger(n)) {
    out.innerHTML = `<p class="error">Enter a non-negative integer (0, 1, 2, ...).</p>`;
    return;
  }

  if (n === 0) {
    out.innerHTML = `
      <p class="steps">0! = 1 (by definition)</p>
      <p class="final">Final Result: <strong>1</strong></p>
    `;
    return;
  }

  let i = n;
  let factorial = 1;
  const factors = [];

  do {
    factors.push(i);
    factorial *= i;
    i--;
  } while (i >= 1);

 
  const stepStr = factors.join(" × ");
  out.innerHTML = `
    <p class="steps">${stepStr} = ${factorial}</p>
    <p class="final">Final Result: <strong>${n}! = ${factorial}</strong></p>
  `;
}

function clearAll() {
  document.getElementById("number").value = "";
  document.getElementById("output").innerHTML = `<p class="hint">Result and steps will appear here...</p>`;
}
