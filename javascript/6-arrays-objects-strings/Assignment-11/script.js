function combineArrays() {
  const arr1Input = document.getElementById("array1").value;
  const arr2Input = document.getElementById("array2").value;
  const output = document.getElementById("output");

  const arr1 = arr1Input.split(",").map(Number);
  const arr2 = arr2Input.split(",").map(Number);

  const combined = [...arr1, ...arr2];

  const uniqueArray = [];
  for (let num of combined) {
    if (!uniqueArray.includes(num)) {
      uniqueArray.push(num);
    }
  }

  output.textContent = `Combined Unique Array: [${uniqueArray.join(", ")}]`;
}
