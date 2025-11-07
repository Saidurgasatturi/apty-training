let newWindow; 

document.getElementById("openBtn").addEventListener("click", () => {

  newWindow = window.open(
    "https://www.example.com",  
    "_blank",                   
    "width=400,height=300"      
  );

  if (newWindow) {
    alert("New window opened!");
  } else {
    alert("Pop-up blocked! Allow pop-ups to open window.");
  }
});


document.getElementById("resizeBtn").addEventListener("click", () => {
  if (newWindow && !newWindow.closed) {
    newWindow.resizeTo(800, 600); 
    newWindow.focus();            
  } else {
    alert("Window not open!");
  }
});

document.getElementById("closeBtn").addEventListener("click", () => {
  if (newWindow && !newWindow.closed) {
    newWindow.close();
    alert("Window closed!");
  } else {
    alert("No window to close!");
  }
});
