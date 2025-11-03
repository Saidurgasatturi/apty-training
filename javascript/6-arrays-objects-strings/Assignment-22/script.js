function generateGreeting() {
  const name = document.getElementById("nameInput").value.trim();
  const age = document.getElementById("ageInput").value.trim();
  const result = document.getElementById("result");

  if (!name || !age) {
    result.innerText = "Please enter both name and age.";
    return;
  }
  const message = `Hello, my name is ${name} and I am ${age} years old.`;

  result.innerText = message;
}
