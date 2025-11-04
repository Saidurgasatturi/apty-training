
function changeColorById() {
  const ids = ["para1", "para2"];
  let output = "";
  ids.forEach(id => {
    const el = document.getElementById(id);
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    el.style.color = randomColor;
    output += `Changed color of ${id} to ${randomColor}<br>`;
  });
  printResult(output);
}
function toggleClassColor() {
  const elements = document.getElementsByClassName("group");
  for (let el of elements) {
    el.classList.toggle("highlight");
  }
  printResult("Toggled background color of all elements with class 'group'");
}
function changeSpanText() {
  const spans = document.getElementsByTagName("span");
  for (let i = 0; i < spans.length; i++) {
    spans[i].innerHTML = "Updated Span " + (i + 1);
  }
  printResult("Updated text content of all <span> elements.");
}
function toggleDisable() {
  const inputs = document.querySelectorAll("input[name]");
  inputs.forEach(input => {
    input.disabled = !input.disabled;
  });
  printResult("Toggled 'disabled' attribute for all input elements with name attribute.");
}
function addCustomAttribute() {
  const element = document.querySelector("[data-info='custom1']");
  element.setAttribute("data-added", "newValue");
  printResult("Added new attribute: data-added='newValue' to element with data-info='custom1'");
}
function printResult(message) {
  document.getElementById("output").innerHTML = message;
}
