const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');
const latitude = document.querySelector('.latitude');
const longitude = document.querySelector('.longitude');


navigator.geolocation.watchPosition((data) => {
    speed.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
    latitude.textContent = Math.round(data.coords.latitude);
    longitude.textContent = Math.round(data.coords.longitude);

}, (err) => {
    console.err(err);
    alert('You should allow the access');
});