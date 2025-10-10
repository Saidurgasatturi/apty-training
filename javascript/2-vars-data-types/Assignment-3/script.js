let output = "";
let name = "Sai Durga";
output += "Value: " + name + " — Type: " + typeof name + "<br>";

let age = 22;
output += "Value: " + age + " — Type: " + typeof age + "<br>";

let isStudent = true;
output += "Value: " + isStudent + " — Type: " + typeof isStudent + "<br>";

let city;
output += "Value: " + city + " — Type: " + typeof city + "<br>";

let car = null;
output +=
  "Value: " +
  car +
  " — Type: " +
  typeof car +
  " (note: null is a special case)<br>";

let sym = Symbol("id");
output += "Value: " + sym.toString() + " — Type: " + typeof sym + "<br>";

let student = { name: "Sai", age: 25 }; 
output +=
  "Value: " + JSON.stringify(student) + " — Type: " + typeof student + "<br>";

document.getElementById("output").innerHTML = output;
