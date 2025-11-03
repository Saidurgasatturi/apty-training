function replaceEscapeSequences() {
  const input = document.getElementById("inputStr").value;

  const output = input
    .replace(/\\n/g, "\\\\n")   
    .replace(/\\t/g, "\\\\t"); 

  document.getElementById("result").innerText = output;
}
