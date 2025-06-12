
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomEmail(country) {
  const domains = {
    UAE: ["@uae.com", "@dubai.ae"],
    USA: ["@example.com", "@testmail.com"],
    India: ["@test.in", "@demo.in"],
    UK: ["@ukmail.co.uk", "@london.uk"]
  };
  const name = "user" + getRandomInt(1000, 9999);
  return name + domains[country][getRandomInt(0, domains[country].length - 1)];
}

function randomPhone(country) {
  const prefixes = {
    UAE: "971-5" + getRandomInt(0, 9),
    USA: "+1-" + getRandomInt(200, 999),
    India: "+91-" + getRandomInt(7000, 9999),
    UK: "+44 7" + getRandomInt(0, 9)
  };
  return prefixes[country] + "-" + getRandomInt(1000000, 9999999);
}

function randomCard() {
  return (
    getRandomInt(4000, 4999) + " " +
    getRandomInt(1000, 9999) + " " +
    getRandomInt(1000, 9999) + " " +
    getRandomInt(1000, 9999)
  );
}

function randomAddress(country) {
  const streets = ["Main St", "Oak Rd", "Pine Ave", "Maple Blvd", "Crescent Ln"];
  const cities = {
    UAE: ["Dubai", "Sharjah", "Abu Dhabi"],
    USA: ["New York", "Chicago", "San Francisco"],
    India: ["Mumbai", "Delhi", "Bengaluru"],
    UK: ["London", "Manchester", "Birmingham"]
  };
  const stateCodes = {
    UAE: "UAE",
    USA: "NY",
    India: "MH",
    UK: "LDN"
  };
  return (
    getRandomInt(100, 999) + " " +
    streets[getRandomInt(0, streets.length - 1)] + ", " +
    cities[country][getRandomInt(0, cities[country].length - 1)] + ", " +
    stateCodes[country] + ", " +
    getRandomInt(10000, 99999)
  );
}

function copyToClipboard(id) {
  const el = document.getElementById(id);
  navigator.clipboard.writeText(el.innerText);
}

function generateDummyData() {
  const country = document.getElementById("country").value;
  document.getElementById("email").innerText = randomEmail(country);
  document.getElementById("phone").innerText = randomPhone(country);
  document.getElementById("card").innerText = randomCard();
  document.getElementById("address").innerText = randomAddress(country);
}

setInterval(generateDummyData, 5000);
window.onload = generateDummyData;
