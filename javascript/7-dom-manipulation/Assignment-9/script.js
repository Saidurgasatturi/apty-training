
const iframe = document.getElementById("tableFrame");
const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

const iframeHTML = `
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
iframeDoc.open();
iframeDoc.write(iframeHTML);
iframeDoc.close();

const tbody = iframeDoc.querySelector("tbody");

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
  const selectedRow = tbody.querySelector("tr:nth-child(3)"); // example: move 3rd row
  moveUp(selectedRow);
});

document.getElementById("downBtn").addEventListener("click", () => {
  const selectedRow = tbody.querySelector("tr:nth-child(3)");
  moveDown(selectedRow);
});

document.getElementById("topBtn").addEventListener("click", () => {
  const selectedRow = tbody.querySelector("tr:nth-child(3)");
  moveTop(selectedRow);
});

document.getElementById("bottomBtn").addEventListener("click", () => {
  const selectedRow = tbody.querySelector("tr:nth-child(3)");
  moveBottom(selectedRow);
});
