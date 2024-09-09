const locText = document.querySelector('#location-text');
const speedText = document.querySelector('#speed-text');
const uhOhText = document.querySelector('#error');
const attText = document.querySelector('#attempt-text');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const highSpeedText = document.querySelector('#hi-speed');

let highSpeed = highSpeedText.textContent;
let watchID;
let attempts = 0;

function success(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let speed = Math.round(position.coords.speed * 2.237);

  speedText.innerText = `${speed}`;
  attempts++;
  highSpeedText.innerText = `${highSpeed}`;
  attText.innerText = `Attempt: ${attempts}`;
}

function error(err) {
  uhOhText.innerText = 'UH OH';
  console.log(err.message);
}

options = {
  enableHighAccuracy: true,
  timeout: 2000,
};

function getHighSpeed() {
  if (speed > highSpeed) {
    highSpeed = speed;
  }
}

startBtn.addEventListener('click', () => {
  watchID = navigator.geolocation.watchPosition(success, error, options);
  console.log(watchID);
  startBtn.setAttribute('disabled', true);
});

// stopBtn.addEventListener('click', () => {
//   navigator.geolocation.clearWatch(watchID);
//   watchID = null;
//   console.log(watchID);
// });
