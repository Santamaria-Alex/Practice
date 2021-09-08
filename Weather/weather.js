const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItems = document.getElementById('current-weather-items');
const timeZone = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const weatherForecast = document.getElementById('weather-forecast');
const currentTemp = document.getElementById('current-temp');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const API_KEY = '6d7e5c317c7a39094e4ccf1e9b2d9297';

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursFormat = hour >= 13 ? hour %12: hour;
    const minutes = time.getMinutes();
    const amPm = hour >= 12 ? 'PM' : 'AM';

    timeEl.innerHTML = hoursFormat + ':' + minutes + '' + `<span id="am-pm">${amPm}</span>`

    dateEl.innerHTML = days[day] + ', ' + date + ' ' + months[month];

}, 1000);

getWeatherData();

function getWeatherData (){
    navigator.geolocation.getCurrentPosition((success) => {

        let {latitude, longitude} = success.coords;

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutley&units=imperial&appid=${API_KEY}`).then(res => res.json()).then(data => {

            console.log(data)
            showWeatherData(data);
        })

    })
}

function showWeatherData (data){
    let {humidity, pressure, sunrise, sunset, wind_speed} = data.current;

    currentWeatherItems.innerHTML = `<div class="weather-item">
                      <p>Humidity</p>
                      <p>${humidity}</p>
                  </div>
                  <div class="weather-item">
                      <p>Pressure</p>
                      <p>${pressure}</p>
                  </div>
                  <div class="weather-item">
                      <p>Wind Speed</p>
                      <p>${wind_speed}</p>
                  </div>
                  <div class="weather-item">
                      <p>Sunrise</p>
                      <p>${sunrise}</p>
                  </div>
                  <div class="weather-item">
                      <p>Sunset</p>
                      <p>${sunset}</p>
                  </div>`

}






















