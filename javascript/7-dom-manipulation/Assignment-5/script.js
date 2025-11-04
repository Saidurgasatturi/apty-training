document.getElementById("countBtn").addEventListener("click", () => {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";
  const topLevelElements = document.body.children;
  let output = "<ul>";

  for (let elem of topLevelElements) {
    if (elem.id === "countBtn" || elem.id === "result") continue;
    const nestedElements = elem.getElementsByTagName("*");
    const name = elem.id ? `#${elem.id}` : elem.tagName.toLowerCase();
    output += `<li><strong>${name}</strong>: ${nestedElements.length} nested elements</li>`;
  }

  output += "</ul>";
  resultDiv.innerHTML = output;
});
