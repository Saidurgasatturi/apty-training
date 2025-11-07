
function setCookie(name, value, days) {
  let date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
  alert(`Cookie '${name}' set successfully!`);
}

function getCookies() {
  let cookieObj = {};
  let allCookies = document.cookie.split("; ");

  allCookies.forEach(cookie => {
    let [key, val] = cookie.split("=");
    if (key && val) cookieObj[key] = val;
  });

  return cookieObj;
}

function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  alert(`Cookie '${name}' deleted.`);
}

function setCookieHandler() {
  const name = document.getElementById("cookieName").value.trim();
  const value = document.getElementById("cookieValue").value.trim();
  const days = parseInt(document.getElementById("expireDays").value) || 7;

  if (!name || !value) {
    alert("Please enter both name and value!");
    return;
  }

  setCookie(name, value, days);
  readCookiesHandler();
}

function readCookiesHandler() {
  const display = document.getElementById("cookieDisplay");
  const cookies = getCookies();
  display.textContent = Object.keys(cookies).length
    ? JSON.stringify(cookies, null, 2)
    : "(No cookies found)";
}

function deleteCookieHandler() {
  const name = document.getElementById("cookieName").value.trim();
  if (!name) {
    alert("Please enter cookie name to delete!");
    return;
  }
  deleteCookie(name);
  readCookiesHandler();
}
