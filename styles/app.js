//
const button = document.getElementById('search');
// const metric = '&units=metric';
// const imperial = '&units=imperial';
// const ForC = metricorimperial;
//
const input = document.getElementById('inputValue');

//
const topCityEl = document.getElementById('App');

//
const URLs = "https://api.openweathermap.org/data/2.5/forecast?zip="
const URL2 = ",US&cnt=1&appid="

//
const APIKey = "e6eec167479d0b4471b3a49b163e721a"

//
button.addEventListener("click", fetchdata)

function fetchdata() {
    let URL3 = URLs + input.value + URL2 + APIKey
    fetch(URL3)
    .then(response => response.json())
    .then(data => topCityEl.innerHTML = 
        `<section class="grid-container custom-margin-top">
        <div class="grid-x grid-margin-x">
            <div class="cell small-12 align-middle ">
                <h2 class="title text-center">Weather for: ${data.city.name}</h2>
            </div>
        </div>
    </section>
    <section class="grid-container custom-margin-top">
        <div class="grid-x grid-margin-x align-middle">
            <img class="cell small-4 align-middle" src="../Weather-App/styles/img/5a29cbf3bba5a5.9531327415126886277686.png" alt="">
            <div class="cell small-4 align-middle">
            <h2>${data.list[0].main.temp} °F</h2>
            <h2>${data.list[0].weather.description}</h2>
            </div>
            <ul class="cell small-4 align-middle">
                <li>Feels Like: ${data.list[0].main.feels_like} °F</li>
                <li>Humidity: ${data.list[0].main.humidity}%</li>
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
    </section>`)
};