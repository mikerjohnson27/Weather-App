const button = document.getElementById('search');
// const metric = '&units=metric';
// const imperial = '&units=imperial';
// const ForC = metricorimperial;
const input = document.getElementById('inputValue');

const topCityEl = document.getElementById('App');
const likeToday = document.getElementById('feelsliketoday');
// const topCityEl = document.getElementById('citytop');
// const topCityEl = document.getElementById('citytop');
// const topCityEl = document.getElementById('citytop');
// const topCityEl = document.getElementById('citytop');
// const topCityEl = document.getElementById('citytop');
// const topCityEl = document.getElementById('citytop');
// const topCityEl = document.getElementById('citytop');
// const topCityEl = document.getElementById('citytop');
// const topCityEl = document.getElementById('citytop');
// const topCityEl = document.getElementById('citytop');
// const topCityEl = document.getElementById('citytop');
// const topCityEl = document.getElementById('citytop');
// const topCityEl = document.getElementById('citytop');
// const topCityEl = document.getElementById('citytop');



const URLs = "https://api.openweathermap.org/data/2.5/forecast?zip=03060"
const URL2 = ",US&cnt=1&appid="

const APIKey = 

const Geocoding_API ="api.openweathermap.org/data/2.5/forecast/daily?zip={zip code},{country code}&appid={API key}"
let URL3 = URLs + URL2 + APIKey
function fetchdata() {
    fetch(URL3)
    .then(response => response.json())
    .then(data => topCityEl.innerHTML = `
    <section class="grid-container custom-margin-top">
    <div class="grid-x grid-margin-x">
        <div class="cell small-12 align-middle ">
            <h2 class="title text-center">Weather for:<span>Dalas</span></h2>
        </div>
        <div class="cell small-10 align-middle custom-margin-top">
            <input id="inputValue"class="small-up-8" type="text">
        </div>
        <div class="cell small-2 align-middle custom-margin-top">
            <button id="search" class="submit button">Search</button>
        </div>
        <div class="small-8 custom-margin-top">
            <p class="left">Local Date: June 9, 2022</p>
            <p class="left">Local Time: 12:35pm</p>
        </div>
        <div class="small-offset-3 custom-margin-top">
            <div class="switch medium">
                <input class="switch-input" id="yes-no" type="checkbox" name="exampleSwitch">
                <label class="switch-paddle" for="yes-no">
                <span class="switch-active" aria-hidden="true">°F</span>
                <span class="switch-inactive" aria-hidden="true">°C</span>
                </label>
            </div>
        </div>
    </div>
</section>
<section class="grid-container custom-margin-top">
    <div class="grid-x grid-margin-x align-middle">
        <img class="cell small-4 align-middle" src="../Weather-App/styles/img/5a29cbf3bba5a5.9531327415126886277686.png" alt="">
        <h2 class="cell small-4 align-middle">85 °F</h2>
        <ul class="cell small-4 align-middle">
            <li>Feels Like: <span id="feelsliketoday">90 °F</span></li>
            <li>Humidity: 25%</li>
            <li>Chance of Precipitation: 10%</li>
        </ul>
    </div>
</section>
<section class="grid-container">
    <div class="grid-y grid-margin-y">
        <h3 class="text-center">Hourly</h3>
    </div>
</section>
<section class="grid-container">
    <div class="grid-x grid-margin-x custom-margin-top">
        <div class="cell small-4 timebackground">
            <img class="cell" src="../Weather-App/styles/img/5a29cbf3bba5a5.9531327415126886277686.png" alt="">
            <h4 class="cell small-4 text-center">85 °F</h4>
            <h6 class="cell small-4 text-center">9:00 am</h6>
        </div>
        <div class="cell small-4 timebackground">
            <img class="cell small-4" src="../Weather-App/styles/img/5a29cbf3bba5a5.9531327415126886277686.png" alt="">
            <h4 class="cell small-4 text-center">85 °F</h4>
            <h6 class="cell small-4 text-center">11:00 am</h6>
        </div>
        <div class="cell small-4 timebackground">
            <img class="cell small-4" src="../Weather-App/styles/img/5a29cbf3bba5a5.9531327415126886277686.png" alt="">
            <h4 class="cell small-4 text-center">85 °F</h4>
            <h6 class="cell small-4 text-center">1:00 pm</h6>
        </div>
    </div>
    <div class="grid-x grid-margin-x custom-margin-top">
        <div class="cell small-4 timebackground">
            <img class="cell small-4" src="../Weather-App/styles/img/5a29cbf3bba5a5.9531327415126886277686.png" alt="">
            <h4 class="cell small-4 text-center">85 °F</h4>
            <h6 class="cell small-4 text-center">3:00 pm</h6>
        </div>
        <div class="cell small-4 timebackground">
            <img class="cell small-4" src="../Weather-App/styles/img/5a29cbf3bba5a5.9531327415126886277686.png" alt="">
            <h4 class="cell small-4 text-center">85 °F</h4>
            <h6 class="cell small-4 text-center">5:00 pm</h6>
        </div>
        <div class="cell small-4 timebackground">
            <img class="cell small-4" src="../Weather-App/styles/img/5a29cbf3bba5a5.9531327415126886277686.png" alt="">
            <h4 class="cell small-4 text-center">85 °F</h4>
            <h6 class="cell small-4 text-center">9:00 pm</h6>
        </div>
    </div>
</section>
<section class="grid-container">
    <div class="grid-y grid-margin-y custom-margin-top">
        <h3 class="text-center">Daily</h3>
    </div>
</section>
<section class="grid-container">
    <div class="grid-x grid-margin-x custom-margin-top">
        <div class="cell small-4 timebackground">
            <img class="cell small-4" src="../Weather-App/styles/img/5a29cbf3bba5a5.9531327415126886277686.png" alt="">
            <h4 class="cell small-4 text-center">85 °F/</h4>
            <h6 class="cell small-4 text-center">Friday</h6>
        </div>
        <div class="cell small-4 timebackground">
            <img class="cell small-4" src="../Weather-App/styles/img/5a29cbf3bba5a5.9531327415126886277686.png" alt="">
            <h4 class="cell small-4 text-center">85 °F/</h4>
            <h6 class="cell small-4 text-center">Saturday</h6>
        </div>
        <div class="cell small-4 timebackground">
            <img class="cell small-4" src="../Weather-App/styles/img/5a29cbf3bba5a5.9531327415126886277686.png" alt="">
            <h4 class="cell small-4 text-center">85 °F/</h4>
            <h6 class="cell small-4 text-center">Sunday</h6>
        </div>
    </div>
    <div class="grid-x grid-margin-x custom-margin-top align-center">
        <div class="cell small-4 timebackground">
            <img class="cell small-4" src="../Weather-App/styles/img/5a29cbf3bba5a5.9531327415126886277686.png" alt="">
            <h4 class="cell small-4 text-center">85 °F/</h4>
            <h6 class="cell small-4 text-center">Monday</h6>
        </div>
        <div class="cell small-4 timebackground">
            <img class="cell small-4" src="../Weather-App/styles/img/5a29cbf3bba5a5.9531327415126886277686.png" alt="">
            <h4 class="cell small-4 text-center">85 °F/</h4>
            <h6 class="cell small-4 text-center">Tuesday</h6>
        </div>
    </div>
</section>
<footer>
    <ul class ="menu custom-margin-top">
        <li class="menu-text">Created by Mike R Johnson</li>
        <a href="https://mikerjohnson.com/" class="menu-text">View My Portfolio</a>
        <a href="https://github.com/mikerjohnson27" class="menu-text">View My GitHub</a> 
        <a href="https://github.com/mikerjohnson27/Weather-App" class="menu-text">View The Repo for This App</a> 
    </ul>
</footer>`)
};
fetchdata();