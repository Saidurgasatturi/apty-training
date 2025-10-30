
(function() {
  console.log("IIFE executed automatically on page load");
  const defaultName = "John Doe";
  const defaultEmail = "johndoe@example.com";
  document.getElementById("username").value = defaultName;
  document.getElementById("email").value = defaultEmail;
  document.getElementById("message").innerText = 
    `Default values have been initialized automatically.`;
})();
