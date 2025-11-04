
const host = document.getElementById("shadow-host");

const shadow = host.attachShadow({ mode: "open" }); 
const shadowContent = `
  <style>
    table { border-collapse: collapse; width: 100%; text-align: center; }
    th, td { border: 1px solid black; padding: 8px; }
    .highlight { background-color: yellow; }
    .bgToggle { background-color: lightblue; }
  </style>
  <table>
    <tr>
      <th>id</th>
      <th>className</th>
      <th>tag</th>
      <th>name</th>
      <th>attribute</th>
    </tr>
    <tr>
      <td><p id="p1">ID Para 1</p><p id="p2">ID Para 2</p></td>
      <td><p class="same">Class Para 1</p><p class="same">Class Para 2</p></td>
      <td><span>Tag Span 1</span><span>Tag Span 2</span></td>
      <td><input type="text" name="input1" value="Input 1"><input type="text" name="input2" value="Input 2"></td>
      <td><p data-custom="val1">Attr Para 1</p><p data-custom="val2">Attr Para 2</p></td>
    </tr>
  </table>
`;
shadow.innerHTML = shadowContent;
document.getElementById("byIdBtn").addEventListener("click", () => {
  const p = shadow.getElementById("p1");
  p.style.color = p.style.color === "red" ? "blue" : "red";
});

document.getElementById("byClassBtn").addEventListener("click", () => {
  const elems = shadow.getElementsByClassName("same");
  for (let el of elems) {
    el.classList.toggle("bgToggle");
  }
});

document.getElementById("byTagBtn").addEventListener("click", () => {
  const spans = shadow.getElementsByTagName("span");
  for (let span of spans) {
    span.innerHTML = "Updated Span Text";
  }
});

document.getElementById("byNameBtn").addEventListener("click", () => {
  const inputs = shadow.querySelectorAll('[name="input1"], [name="input2"]');
  for (let input of inputs) {
    input.disabled = !input.disabled;
  }
});

document.getElementById("byAttrBtn").addEventListener("click", () => {
  const para = shadow.querySelector('[data-custom="val1"]');
  para.setAttribute("data-new", "newValue");
  alert("New attribute added: data-new='newValue'");
});
