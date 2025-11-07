
const iframe = document.getElementById("childFrame");
document.getElementById("sendToIframe").addEventListener("click", () => {
  const message = document.getElementById("parentMsg").value.trim();
  iframe.contentWindow.postMessage(message || "No message", "*");
});
window.onmessage = (event) => {
  document.getElementById("receivedFromIframe").textContent =
    "From Iframe: " + event.data;
};
