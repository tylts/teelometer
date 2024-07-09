const locText = document.querySelector('#location-text');
const speedText = document.querySelector('#speed-text');
const uhOhText = document.querySelector('#error');

function success(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let speed = position.coords.speed;

  locText.innerText = `Latitude: ${lat}, Longitude: ${long}`;
  speedText.innerText = `Speed: ${speed}`;
}

function error(err) {
  uhOhText.innerText = 'UH OH';
  console.log(err.message);
}

options = {
  enableHighAccuracy: true,
  timeout: 100,
};

let watchID = navigator.geolocation.watchPosition(success, error, options);
