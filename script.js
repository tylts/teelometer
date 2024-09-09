const locText = document.querySelector('#location-text');
const speedText = document.querySelector('#speed-text');
const uhOhText = document.querySelector('#error');
const attText = document.querySelector('#attempt-text');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const highSpeed = document.querySelector('#hi-speed');

let attempts = 0;

function success(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let speed = Math.round(position.coords.speed * 2.237);

  speedText.innerText = `${speed}`;
  attempts++;
  highSpeed.innerText = `High Speed: ${getHighSpeed(speed)}`;
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

function getHighSpeed(speed) {
  let highestSpeed = speed;
  if (speed > highestSpeed) {
    highestSpeed = speed;
  }
  return highestSpeed;
}

startBtn.addEventListener('click', () => {
  let watchID = navigator.geolocation.watchPosition(success, error, options);
  console.log(watchID);
});
