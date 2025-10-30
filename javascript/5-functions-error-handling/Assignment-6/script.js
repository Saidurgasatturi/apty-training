
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

function calculateSum() {
  const input = document.getElementById("numbers").value;

  if (!input.trim()) {
    document.getElementById("result").innerHTML = "<p style='color:red;'>Please enter some numbers!</p>";
    return;
  }

  const numArray = input.split(",").map(Number);

  const total = sumAll(...numArray);

  document.getElementById("result").innerText = 
    `Sum of numbers = ${total}`;

  console.log("Numbers:", numArray);
  console.log("Sum:", total);
}
