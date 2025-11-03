// Function to recursively flatten an array
function customFlatten(arr) {
  let result = [];
  for (let element of arr) {
    if (Array.isArray(element)) {
      result = result.concat(customFlatten(element));
    } else {
      result.push(element);
    }
  }
  return result;
}

function flattenArray() {
  let input = document.getElementById("inputArray").value;

  try {
    let arr = JSON.parse(input); 
    let flattened = customFlatten(arr);
    document.getElementById("result").innerHTML = `[ ${flattened.join(", ")} ]`;
  } catch (error) {
    document.getElementById("result").innerHTML = "❌ Invalid input! Please enter a valid array format.";
  }
}
