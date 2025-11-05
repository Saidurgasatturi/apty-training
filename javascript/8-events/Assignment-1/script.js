
const table = document.getElementById("myTable");
for (let i = 0; i < 10; i++) {
  const row = table.insertRow();
  for (let j = 0; j < 10; j++) {
    const cell = row.insertCell();
    cell.textContent = `${i + 1},${j + 1}`; // Display cell position
  }
}
table.addEventListener("mouseover", (event) => {
  if (event.target.tagName === "TD") {
    const cell = event.target;
    const row = cell.parentNode;
    const colIndex = cell.cellIndex;

    for (let td of row.children) {
      td.classList.add("highlight");
    }

    for (let r of table.rows) {
      r.cells[colIndex].classList.add("highlight");
    }
  }
});

table.addEventListener("mouseout", (event) => {

  if (event.target.tagName === "TD") {
    for (let row of table.rows) {
      for (let cell of row.cells) {
        cell.classList.remove("highlight");
      }
    }
  }
});
