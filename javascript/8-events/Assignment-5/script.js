
const parentDiv = document.getElementById("parentDiv");
const childDiv = document.getElementById("childDiv");

parentDiv.addEventListener("click", function() {
  alert("Parent div clicked!");
});

childDiv.addEventListener("click", function(event) {
  alert("Child div clicked!");
  event.stopPropagation(); 
});
