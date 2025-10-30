
function calculateRectangleArea(length = 5, width = 3) {
  return length * width;
}

function calculateArea() {
  const lengthInput = document.getElementById("length").value;
  const widthInput = document.getElementById("width").value;

  const length = lengthInput ? Number(lengthInput) : undefined;
  const width = widthInput ? Number(widthInput) : undefined;

  const area = calculateRectangleArea(length, width);

  document.getElementById("result").innerText = 
    `Area of Rectangle = ${area} sq. units`;

  console.log(`Calculated area: ${area}`);
}
