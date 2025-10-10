let output = "";
output += "<b>Using var:</b><br>";
var x = 10;
output += "Initial value: " + x + "<br>";
var x = 20;
output += "After redeclaration: " + x + "<br>";
x = 30;
output += "After reassignment: " + x + "<br><br>";

output += "<b>Using let:</b><br>";
let y = 10;
output += "Initial value: " + y + "<br>";
try {
  let y = 20;
  output += "After redeclaration: " + y + "<br>";
} catch (err) {
  output += "Error on redeclaration: " + err.message + "<br>";
}
y = 30;
output += "After reassignment: " + y + "<br><br>";

output += "<b>Using const:</b><br>";
const z = 10;
output += "Initial value: " + z + "<br>";
try {
  const z = 20;
  output += "After redeclaration: " + z + "<br>";
} catch (err) {
  output += "Error on redeclaration: " + err.message + "<br>";
}
try {
  z = 30;
  output += "After reassignment: " + z + "<br>";
} catch (err) {
  output += "Error on reassignment: " + err.message + "<br>";
}

document.getElementById("output").innerHTML = output;
