
let userObject = {};

function addToObject() {
  const key = document.getElementById("keyInput").value.trim();
  const value = document.getElementById("valueInput").value.trim();
  const output = document.getElementById("output");

  if (key === "" || value === "") {
    output.textContent = "⚠️ Please enter both key and value.";
    return;
  }

  if (userObject.hasOwnProperty(key)) {
    output.textContent = `🔁 Key "${key}" already exists. Value will be updated.`;
  } else {
    output.textContent = `✅ Added new key "${key}" to the object.`;
  }

  userObject[key] = value;

  output.textContent += `\n\n📦 Current Object:\n${JSON.stringify(userObject, null, 2)}`;
}
