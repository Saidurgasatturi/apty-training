
const divs = document.querySelectorAll(".color-box");
const button = document.getElementById("toggleBtn");
let currentIndex = 0;

divs[currentIndex].style.display = "block";


button.addEventListener("click", () => {

  divs[currentIndex].style.display = "none";

  currentIndex = (currentIndex + 1) % divs.length;

  divs[currentIndex].style.display = "block";
});
