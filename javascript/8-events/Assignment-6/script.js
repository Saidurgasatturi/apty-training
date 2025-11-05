const form = document.getElementById("registerForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

username.addEventListener("input", () => {
  if (username.value.trim().length < 3) {
    usernameError.textContent = "Username must be at least 3 characters";
    username.classList.add("invalid");
    username.classList.remove("valid");
  } else {
    usernameError.textContent = "";
    username.classList.add("valid");
    username.classList.remove("invalid");
  }
});

email.addEventListener("input", () => {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    emailError.textContent = "Please enter a valid email";
    email.classList.add("invalid");
    email.classList.remove("valid");
  } else {
    emailError.textContent = "";
    email.classList.add("valid");
    email.classList.remove("invalid");
  }
});

password.addEventListener("input", () => {
  if (password.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    password.classList.add("invalid");
    password.classList.remove("valid");
  } else {
    passwordError.textContent = "";
    password.classList.add("valid");
    password.classList.remove("invalid");
  }
});


form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  if (
    username.classList.contains("valid") &&
    email.classList.contains("valid") &&
    password.classList.contains("valid")
  ) {
    alert("Form submitted successfully!");
  } else {
    alert("Please fix errors before submitting.");
  }
});
