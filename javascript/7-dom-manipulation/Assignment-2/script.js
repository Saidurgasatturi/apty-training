
const innerHTMLContent = `
<style>
  table, td { border: 1px solid black; border-collapse: collapse; padding: 10px; }
  .highlight { background-color: lightblue; }
</style>

<table>
  <tr>
    <th>ID</th>
    <th>ClassName</th>
    <th>Tag</th>
    <th>Name</th>
    <th>Attribute</th>
  </tr>
  <tr>
    <td>
      <p id="para1">Paragraph 1</p>
      <p id="para2">Paragraph 2</p>
    </td>
    <td>
      <p class="group">Group 1</p>
      <p class="group">Group 2</p>
    </td>
    <td>
      <span>Tag Span 1</span>
      <span>Tag Span 2</span>
    </td>
    <td>
      <input name="first" value="One">
      <input name="second" value="Two">
    </td>
    <td>
      <p data-info="custom1">Custom 1</p>
      <p data-info="custom2">Custom 2</p>
    </td>
  </tr>
</table>
`;
window.onload = () => {
  const iframe = document.getElementById("myFrame");
  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
  iframeDoc.open();
  iframeDoc.write(innerHTMLContent);
  iframeDoc.close();
  document.getElementById("btnId").addEventListener("click", () => changeColorById(iframeDoc));
  document.getElementById("btnClass").addEventListener("click", () => toggleClassColor(iframeDoc));
  document.getElementById("btnTag").addEventListener("click", () => changeSpanText(iframeDoc));
  document.getElementById("btnName").addEventListener("click", () => toggleDisable(iframeDoc));
  document.getElementById("btnAttr").addEventListener("click", () => addCustomAttribute(iframeDoc));
};

function changeColorById(doc) {
  const ids = ["para1", "para2"];
  ids.forEach(id => {
    const el = doc.getElementById(id);
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    el.style.color = randomColor;
  });
  printResult("Changed color of paragraphs inside iFrame.");
}
function toggleClassColor(doc) {
  const elements = doc.getElementsByClassName("group");
  for (let el of elements) {
    el.classList.toggle("highlight");
  }
  printResult("Toggled background color of group paragraphs inside iFrame.");
}

function changeSpanText(doc) {
  const spans = doc.getElementsByTagName("span");
  for (let i = 0; i < spans.length; i++) {
    spans[i].innerHTML = "Updated Span " + (i + 1);
  }
  printResult("Updated span text inside iFrame.");
}

function toggleDisable(doc) {
  const inputs = doc.querySelectorAll("input[name]");
  inputs.forEach(input => {
    input.disabled = !input.disabled;
  });
  printResult("Toggled input disable inside iFrame.");
}

function addCustomAttribute(doc) {
  const element = doc.querySelector("[data-info='custom1']");
  element.setAttribute("data-added", "newValue");
  printResult("Added new attribute inside iFrame.");
}

function printResult(message) {
  document.getElementById("output").innerHTML = message;
}
