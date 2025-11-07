
document.getElementById("info").innerText = "Current URL: " + window.location.href;

document.getElementById("goBtn").addEventListener("click", () => {
  const url = document.getElementById("urlInput").value.trim();
  if (url) {

    window.location.assign(url);
  } else {
    alert("Please enter a valid URL!");
  }
});

document.getElementById("backBtn").addEventListener("click", () => {
  window.history.back();
});

document.getElementById("forwardBtn").addEventListener("click", () => {
  window.history.forward();
});

document.getElementById("reloadBtn").addEventListener("click", () => {
  window.location.reload();
});
