const editableDiv = document.getElementById("editableDiv");

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length > 0) {
      mutation.addedNodes.forEach((node) => {
        if (node.tagName === "TEXTAREA") {
          console.log("Textarea added to DOM ✅");
          node.addEventListener("blur", () => {
            const newText = node.value.trim() || "No text entered";
            editableDiv.innerHTML = `<span id="textContent">${newText}</span> <span class="icon">✏️</span>`;
          });
        }
      });
    }
  });
});

observer.observe(editableDiv, { childList: true });

editableDiv.addEventListener("click", () => {
  const currentText = document.getElementById("textContent").textContent;
  editableDiv.innerHTML = `<textarea>${currentText}</textarea>`;
});
