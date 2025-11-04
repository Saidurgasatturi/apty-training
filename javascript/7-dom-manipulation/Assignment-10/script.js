
const shadowHost = document.getElementById("shadowHost");
const shadowRoot = shadowHost.attachShadow({ mode: "open" });
const shadowHTML = `
  <style>
    table {
      border-collapse: collapse;
      width: 100%;
      text-align: center;
      font-family: Arial;
    }
    td, th {
      border: 1px solid black;
      padding: 8px;
    }
    button {
      margin: 2px;
      padding: 4px 6px;
    }
    tr.selected {
      background-color: lightyellow;
    }
  </style>

  <table>
    <thead>
      <tr><th>#</th><th>Item</th><th>Actions</th></tr>
    </thead>
    <tbody>
      ${Array.from({ length: 10 }, (_, i) => `
        <tr>
          <td>${i + 1}</td>
          <td>Item ${i + 1}</td>
          <td>
            <button class="up">Up</button>
            <button class="down">Down</button>
            <button class="top">Top</button>
            <button class="bottom">Bottom</button>
          </td>
        </tr>
      `).join("")}
    </tbody>
  </table>
`;

shadowRoot.innerHTML = shadowHTML;

const tbody = shadowRoot.querySelector("tbody");
let selectedRow = null;
tbody.addEventListener("click", (e) => {
  if (e.target.closest("tr")) {
    if (selectedRow) selectedRow.classList.remove("selected");
    selectedRow = e.target.closest("tr");
    selectedRow.classList.add("selected");
  }
});

function moveUp(row) {
  const prev = row.previousElementSibling;
  if (prev) tbody.insertBefore(row, prev);
}

function moveDown(row) {
  const next = row.nextElementSibling;
  if (next) tbody.insertBefore(next, row);
}

function moveTop(row) {
  tbody.insertBefore(row, tbody.firstElementChild);
}

function moveBottom(row) {
  tbody.appendChild(row);
}

document.getElementById("upBtn").addEventListener("click", () => {
  if (selectedRow) moveUp(selectedRow);
});

document.getElementById("downBtn").addEventListener("click", () => {
  if (selectedRow) moveDown(selectedRow);
});

document.getElementById("topBtn").addEventListener("click", () => {
  if (selectedRow) moveTop(selectedRow);
});

document.getElementById("bottomBtn").addEventListener("click", () => {
  if (selectedRow) moveBottom(selectedRow);
});
