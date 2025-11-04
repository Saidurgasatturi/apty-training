document.getElementById("countBtn").addEventListener("click", () => {
  const allElements = document.getElementsByTagName("*");
  const elementCount = {};
  for (let el of allElements) {
    const tag = el.tagName.toLowerCase();
    elementCount[tag] = (elementCount[tag] || 0) + 1;
  }
  let output = "<ul>";
  for (let tag in elementCount) {
    output += `<li><strong>${tag}</strong>: ${elementCount[tag]}</li>`;
  }
  output += "</ul>";

  document.getElementById("result").innerHTML = output;
});
