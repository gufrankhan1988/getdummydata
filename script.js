
let selectedCountry = "USA";

const cardList = ['3530111333300000', '4000141680788456', '4024764449971519', '4076613139850359', '4407108123937239', '4532432452900131', '4532446037926437', '4543611423334994', '4546381219393284', '4558473893020179', '4610179846730147', '4644968546281686', '4724117215951699', '4857662623668665', '485599724585691', '4975992266555193', '4978313915783283', '5109110000000030', '5109119931560251', '5132728491870081', '5136406072992030', '514308988000015', '518832348066463', '527492661111018', '527492661111026', '534183988000032', '5352151570003404', '5355224968521878', '5355225201525238', '535522589678168', '5355228287185489', '5355229757805879', '541059618000085', '5574357535453624', '5597995737485691', '622311288000062', '622311288000082', '622311288000128', '622311288000137', '622311288000837'];



const domains = {
  UAE: ["@uae.com", "@dubai.ae"],
  USA: ["@example.com", "@testmail.com"],
  India: ["@test.in", "@demo.in"],
  UK: ["@ukmail.co.uk", "@london.uk"]
};

const cities = {
  UAE: ["Dubai", "Sharjah", "Abu Dhabi"],
  USA: ["New York", "Chicago", "San Francisco"],
  India: ["Mumbai", "Delhi", "Bengaluru"],
  UK: ["London", "Manchester", "Birmingham"]
};

const stateCodes = {
  UAE: "UAE", USA: "NY", India: "MH", UK: "LDN"
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomEmail(country) {
  const name = "user" + getRandomInt(1000, 9999);
  const domainList = domains[country];
  return name + domainList[getRandomInt(0, domainList.length - 1)];
}

function randomPhone(country) {
  const codes = {
    UAE: "971-5" + getRandomInt(0, 9),
    USA: "+1-" + getRandomInt(200, 999),
    India: "+91-" + getRandomInt(7000, 9999),
    UK: "+44 7" + getRandomInt(0, 9)
  };
  return codes[country] + "-" + getRandomInt(1000000, 9999999);
}

function randomAddress(country) {
  const streets = ["Main St", "Oak Rd", "Pine Ave", "Maple Blvd", "Crescent Ln"];
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

function setCountry(country) {
  selectedCountry = country;
  generateDummyData();
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomCVV() {
  return Math.random() < 0.5 ? "000" : "123";
}

function getRandomDateInPastYear() {
  const now = new Date();
  const past = new Date(now);
  past.setMonth(now.getMonth() - getRandomInt(0, 11));
  return ("0" + (past.getMonth() + 1)).slice(-2) + "/" + past.getFullYear();
}

function getRandomDateInNext5Years() {
  const now = new Date();
  const future = new Date(now);
  future.setMonth(now.getMonth() + getRandomInt(1, 60));
  return ("0" + (future.getMonth() + 1)).slice(-2) + "/" + future.getFullYear();
}

function copyToClipboard(id) {
  const el = document.getElementById(id);
  navigator.clipboard.writeText(el.innerText);
}

function generateCardDetails() {
  const cardNum = cardList[getRandomInt(0, cardList.length - 1)];
  const cvv = getRandomCVV();
  const validFrom = getRandomDateInPastYear();
  const validTo = getRandomDateInNext5Years();

  document.getElementById("cardnumber").innerText = cardNum;
  document.getElementById("cvv").innerText = cvv;
  document.getElementById("validfrom").innerText = validFrom;
  document.getElementById("validto").innerText = validTo;
}

function generateDummyData() {
  const country = document.getElementById("country")?.value || "UAE";
  document.getElementById("email").innerText = randomEmail(country);
  document.getElementById("phone").innerText = randomPhone(country);
  document.getElementById("address").innerText = randomAddress(country);
  generateCardDetails();
}

setInterval(generateDummyData, 5000);
window.onload = () => {
  setCountry(selectedCountry);
};
