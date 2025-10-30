
function rectangleCalculator(length = 5, width = 3) {

  function calculateArea() {
    return length * width;
  }

  const perimeter = 2 * (length + width);
  const area = calculateArea();

  return { perimeter, area };
}
function calculateRectangle() {
  const lengthInput = document.getElementById("length").value;
  const widthInput = document.getElementById("width").value;

  const length = lengthInput ? Number(lengthInput) : undefined;
  const width = widthInput ? Number(widthInput) : undefined;

  const results = rectangleCalculator(length, width);

  document.getElementById("result").innerHTML = `
    Perimeter of Rectangle = ${results.perimeter} units<br>
    Area of Rectangle = ${results.area} sq. units
  `;

  console.log("Length:", length || 5);
  console.log("Width:", width || 3);
  console.log("Perimeter:", results.perimeter);
  console.log("Area:", results.area);
}
