function scrollToPosition() {
  const x = parseInt(document.getElementById("xInput").value) || 0;
  const y = parseInt(document.getElementById("yInput").value) || 0;
  window.scrollTo(x, y);
}

function scrollUp() {
  window.scrollBy(0, -10);
}

function scrollDown() {
  window.scrollBy(0, 10);
}
