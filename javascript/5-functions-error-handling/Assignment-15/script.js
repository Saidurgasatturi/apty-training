
const users = {
  "lucky": { "address": { "city": "Hyderabad" } },
  "durga": { "address": { "city": "Vijayawada" } },
  "sakshi": { "address": { "city": "Chennai" } }
};


const default_city = "Pune";

function findCity() {
  const input = document.getElementById("username").value.trim();
  const result = document.getElementById("result");
  let city;

  try {

    city = users[input].address.city;
    result.innerHTML = `🏙️ City of <b>${input}</b> is <b>${city}</b>`;
    result.classList.remove("error");
  } 
  catch (error) {
    result.innerHTML = `❌ Error: User <b>${input}</b> not found in records.`;
    result.classList.add("error");
  } 
  finally { 
    if (!city) {
      result.innerHTML += `<br>🌆 Default city: <b>${default_city}</b>`;
    }
  }
}
