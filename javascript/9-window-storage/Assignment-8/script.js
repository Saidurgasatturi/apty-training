
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const saveBtn = document.getElementById("saveBtn");
const output = document.getElementById("output");

function displayData() {
  const localName = localStorage.getItem("name") || "No data";
  const localEmail = localStorage.getItem("email") || "No data";
  const sessionName = sessionStorage.getItem("name") || "No data";
  const sessionEmail = sessionStorage.getItem("email") || "No data";

  output.innerHTML = `
    <h4>Local Storage:</h4>
    <p><strong>Name:</strong> ${localName}</p>
    <p><strong>Email:</strong> ${localEmail}</p>
    <hr>
    <h4>Session Storage:</h4>
    <p><strong>Name:</strong> ${sessionName}</p>
    <p><strong>Email:</strong> ${sessionEmail}</p>
  `;
}

saveBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (!name || !email) {
    alert("Please enter both name and email!");
    return;
  }
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);

  sessionStorage.setItem("name", name);
  sessionStorage.setItem("email", email);

  alert("Data saved successfully!");
  displayData();
});

window.addEventListener("load", displayData);
