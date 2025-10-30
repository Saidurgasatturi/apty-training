

function repeatAction(action, n) {
  for (let i = 0; i < n; i++) {
    action(i); 
  }
}

function createList() {
  const text = document.getElementById("itemText").value.trim();
  const count = Number(document.getElementById("count").value);
  const list = document.getElementById("itemList");

  list.innerHTML = "";

  if (!text || count <= 0) {
    list.innerHTML = "<p style='color:red;'>Please enter valid text and count!</p>";
    return;
  }

  const addItem = (index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${text}`;
    list.appendChild(li);
  };

  repeatAction(addItem, count);
}
