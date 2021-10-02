
const API_KEY = "61332dd2bc3046683989efc6a4a13591"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live it", lat, lng);
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector(".weather span:first-child")
        const weather = document.querySelector(".weather span:last-child")    
        city.innerText = data.name
        weather.innerText = `${data.weather[0].main}   ${data.main.temp}℃`
    });
}
function onGeoError() {
    alert("Can't find your area. Can't give you the information of your place.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);