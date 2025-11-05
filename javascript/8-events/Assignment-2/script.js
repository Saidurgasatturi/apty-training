const keydownDiv = document.getElementById("keydownDiv");
const keyupDiv = document.getElementById("keyupDiv");

let pressedKeys = new Set();


window.addEventListener("keydown", (event) => {
  pressedKeys.add(event.key);
  const combo = Array.from(pressedKeys).join(" + "); 
  keydownDiv.textContent = `KeyDown: ${combo}`;
});

window.addEventListener("keyup", (event) => {
  pressedKeys.delete(event.key); 
  keyupDiv.textContent = `KeyUp: ${event.key}`;
});
