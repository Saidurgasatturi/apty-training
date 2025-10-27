function calculateSum() {
  const num = Number(document.getElementById("number").value);
  const result = document.getElementById("result");

  if (isNaN(num) || num <= 0) {
    result.innerHTML = "⚠️ Please enter a valid positive number!";
    return;
  }

  let i = 1;
  let sum = 0;


  while (i <= num) {
    sum += i;
    i++;
  }

  result.innerHTML = `✅ The sum of numbers from 1 to ${num} is <strong>${sum}</strong>`;
}
