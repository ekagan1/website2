// location for written out city, ect.
async function fetchText() {
    let url = 'https://ipinfo.io/json?token=1cc230fe868729';
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    document.getElementById('city').innerHTML = data.city;
    document.getElementById('region').innerHTML = data.region;
    document.getElementById('timezone').innerHTML = data.timezone;
    document.getElementById('tCity').innerHTML = data.city;
    document.getElementById('tRegion').innerHTML = data.region;
    document.getElementById('tTimezone').innerHTML = data.timezone;
    document.getElementById('tCountry').innerHTML = data.country;
    document.getElementById('tPostal').innerHTML = data.postal;
    document.getElementById('tLoc').innerHTML = data.loc;
    document.getElementById('tIp').innerHTML = data.ip;
    document.getElementById('tHostname').innerHTML = data.hostname;
}
fetchText();

// location for the Google Map
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
} 
function successFunction(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  console.log(lat, long)
 initMap(lat, long);
}
function errorFunction(){
  alert("Geolocation failed");
};

function initMap(latitude, longitude) {
  console.log(latitude, longitude);
  const locationGM = { lat: latitude, lng: longitude };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: locationGM,
  });
  const marker = new google.maps.Marker({
    position: locationGM,
    map: map,
  });
  }

  window.initMap = initMap();