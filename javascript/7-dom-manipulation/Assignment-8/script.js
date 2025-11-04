
const tbody = document.querySelector("#dataTable tbody");

for (let i = 1; i <= 10; i++) {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${i}</td>
    <td>Item ${i}</td>
    <td>
      <button class="up">Up</button>
      <button class="down">Down</button>
      <button class="top">Top</button>
      <button class="bottom">Bottom</button>
    </td>
  `;

  tbody.appendChild(row);
}

tbody.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;

  const button = e.target;
  const row = button.closest("tr"); 

  if (button.classList.contains("up")) moveUp(row);
  if (button.classList.contains("down")) moveDown(row);
  if (button.classList.contains("top")) moveTop(row);
  if (button.classList.contains("bottom")) moveBottom(row);
});


function moveUp(row) {
  const prevRow = row.previousElementSibling;
  if (prevRow) {
    tbody.insertBefore(row, prevRow); 
  }
}

function moveDown(row) {
  const nextRow = row.nextElementSibling;
  if (nextRow) {
    tbody.insertBefore(nextRow, row); 
  }
}

function moveTop(row) {
  tbody.insertBefore(row, tbody.firstElementChild);
}

function moveBottom(row) {
  tbody.appendChild(row);
}
