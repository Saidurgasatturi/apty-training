function removeDuplicates(arr) {
  let uniqueArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }

  return uniqueArr;
}

function removeDuplicatesHandler() {
  let input = document.getElementById("arrayInput").value;
  let resultElement = document.getElementById("result");

  if (input.trim() === "") {
    resultElement.innerText = "⚠️ Please enter a valid array!";
    return;
  }

  let arr = input.split(",").map(num => parseInt(num.trim())).filter(n => !isNaN(n));

  let result = removeDuplicates(arr);

  resultElement.innerText = "Unique Array: " + JSON.stringify(result);
}
