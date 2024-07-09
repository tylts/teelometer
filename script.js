(function geoFindMe() {
  const status = document.querySelector('#status');
  const mapLink = document.querySelector('#map-link');
  const altitudeText = document.querySelector('#altitude-text');
  const speedText = document.querySelector('#speed-text');

  mapLink.href = '';
  mapLink.textContent = '';

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const altitude = position.coords.altitude;
    const speed = position.coords.speed;
    console.log(position.coords);
    // console.log(navigator.geolocation.watchPosition());

    status.textContent = '';
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    // mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °, Altitude: ${altitude}, Speed: ${speed}`;
    altitudeText.textContent = `Altitude: ${altitude}`;
    speedText.textContent = `Speed: ${speed}`;
  }

  function error() {
    status.textContent = 'well shit';
  }

  if (!navigator.geolocation) {
    status.textContent = 'not support';
  } else {
    status.textContent = 'Locating...';
    navigator.geolocation.getCurrentPosition(success, error);
  }
})();

// const locate = geoFindMe();

// document.querySelector('#find-me').addEventListener('click', geoFindMe);
