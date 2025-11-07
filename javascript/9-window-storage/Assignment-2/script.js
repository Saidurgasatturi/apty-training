
function updateDimensions() {
  document.getElementById("innerWidth").textContent = window.innerWidth;
  document.getElementById("innerHeight").textContent = window.innerHeight;
  document.getElementById("outerWidth").textContent = window.outerWidth;
  document.getElementById("outerHeight").textContent = window.outerHeight;

  document.getElementById("screenWidth").textContent = screen.width;
  document.getElementById("screenHeight").textContent = screen.height;
  document.getElementById("availWidth").textContent = screen.availWidth;
  document.getElementById("availHeight").textContent = screen.availHeight;
  document.getElementById("colorDepth").textContent = screen.colorDepth;
}

updateDimensions();

window.addEventListener("resize", () => {
  updateDimensions();
  console.log("Window resized:", window.innerWidth, "x", window.innerHeight);
});
