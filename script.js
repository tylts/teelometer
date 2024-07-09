const locText = document.querySelector('#location-text');
const speedText = document.querySelector('#speed-text');

const watchID = navigator.geolocation.watchPosition((position) => {
  doSomething(
    position.coords.latitude,
    position.coords.longitude,
    position.coords.speed
  );
});

function doSomething(lat, long, speed) {
  locText.innerText = `Latitude: ${lat}, Longitude: ${long}`;
  speedText.innerText = `Speed: ${speed}`;
}
