const locText = document.querySelector('#location-text');
const speedText = document.querySelector('#speed-text');
const uhOhText = document.querySelector('#error');
const attText = document.querySelector('#attempt-text');

let attempts = 0;

function success(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let speed = Math.round(position.coords.speed * 2.237);

  // locText.innerText = `Latitude: ${lat}, Longitude: ${long}`;
  speedText.innerText = `${speed}`;
  attempts++;
  attText.innerText = `Attempt: ${attempts}`;
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
