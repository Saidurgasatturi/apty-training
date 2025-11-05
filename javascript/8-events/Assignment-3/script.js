
const level1 = document.getElementById("level1");
const level2 = document.getElementById("level2");
const level3 = document.getElementById("level3");
level1.addEventListener("click", () => {
  alert("Level 1 (Capture Phase)");
}, true);  

level2.addEventListener("click", () => {
  alert("Level 2 (Bubble Phase)");
}); 

level3.addEventListener("click", () => {
  alert("Level 3 (Target Phase)");
});
