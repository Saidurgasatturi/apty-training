
const sortArray = function(arr) {
  return arr.sort((a, b) => a - b);
};

function sortNumbers() {
  const input = document.getElementById("numbers").value;
  
  if (!input.trim()) {
    document.getElementById("result").innerHTML = "<p style='color:red;'>Please enter some numbers!</p>";
    return;
  }

  const numArray = input.split(",").map(Number);
  const sortedArray = sortArray(numArray);
  let tableHTML = `
    <table>
      <tr><th>Index</th><th>Value</th></tr>
      ${sortedArray.map((num, i) => `<tr><td>${i + 1}</td><td>${num}</td></tr>`).join('')}
    </table>
  `;

  document.getElementById("result").innerHTML = `
    <h3>Sorted Array:</h3>${tableHTML}
  `;

  console.log("Sorted Array:", sortedArray);
}
