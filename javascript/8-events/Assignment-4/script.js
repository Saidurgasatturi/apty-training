document.getElementById("myForm").addEventListener("submit", function(event) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message");
  if (name === "" || email === "") {
    event.preventDefault();
    message.textContent = "Please fill out all fields before submitting!";
  } else {
    message.style.color = "green";
    message.textContent = "Form submitted successfully!";
  }
});
