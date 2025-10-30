
const users = {
  "lucky": { "address": { "city": "Hyderabad" } },
  "durga": { "address": { "city": "Vijayawada" } },
  "sakshi": { "address": { "city": "Chennai" } }
};

function findCity() {
  const input = document.getElementById("username").value.trim();
  const result = document.getElementById("result");

  try {
 
    const city = users[input].address.city;
    result.innerHTML = `🏙️ City of <b>${input}</b> is <b>${city}</b>`;
    result.classList.remove("error");
  } 
  catch (error) {
    result.innerHTML = `❌ Error: User <b>${input}</b> not found in records.`;
    result.classList.add("error");
  }
}
