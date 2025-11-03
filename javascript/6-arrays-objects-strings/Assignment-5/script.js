function chunkArray(arr, size) {
  let result = [];

  for (let i = 0; i < arr.length; i += size) {
   
    let chunk = arr.slice(i, i + size);
    result.push(chunk);
  }

  return result;
}

function chunkArrayHandler() {
  let input = document.getElementById("arrayInput").value;
  let size = parseInt(document.getElementById("chunkSize").value);
  let resultElement = document.getElementById("result");

  if (input.trim() === "" || isNaN(size) || size <= 0) {
    resultElement.innerText = "⚠️ Please enter a valid array and chunk size!";
    return;
  }

  let arr = input.split(",").map(num => parseInt(num.trim())).filter(n => !isNaN(n));

  let chunked = chunkArray(arr, size);

  resultElement.innerText = JSON.stringify(chunked);
}
