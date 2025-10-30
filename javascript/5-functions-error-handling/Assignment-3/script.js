let count = 0;

const incrementCounter = () => {
  count++;
  document.getElementById("counter").innerText = count;
  console.log("Button clicked", count);
};

document.getElementById("incrementBtn").addEventListener("click", incrementCounter);
