const button = document.getElementById('search');
// const metric = '&units=metric';
// const imperial = '&units=imperial';
// const ForC = metricorimperial;
const input = document.getElementById('inputValue');

const topCityEl = document.getElementById('App');

const URLs = "https://api.openweathermap.org/data/2.5/forecast?zip="
const URL2 = ",US&cnt=6&appid="

const APIKey = "efb65fc829688895a22f36115faae923"

button.addEventListener("click", fetchData)

function fetchData() {
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
            <img class="cell small-4 align-middle" src="http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png" alt="">
            <div class="cell small-4 align-middle">
            <h2>${data.list[0].main.temp} °F</h2>
            <h2>${data.list[0].weather[0].description}</h2>
            </div>
            <ul class="cell small-4 align-middle">
                <li>Feels Like: ${data.list[0].main.feels_like} °F</li>
                <li>Humidity: ${data.list[0].main.humidity}%</li>
            </ul>
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
                <img class="cell small-4" src="http://openweathermap.org/img/wn/${data.list[1].weather[0].icon}.png" alt="">
                <h4 class="cell small-4 text-center">${data.list[1].main.temp} °F/</h4>
                <h6 class="cell small-4 text-center">Tomorrow</h6>
            </div>
            <div class="cell small-4 timebackground">
                <img class="cell small-4" src="http://openweathermap.org/img/wn/${data.list[2].weather[0].icon}.png" alt="">
                <h4 class="cell small-4 text-center">${data.list[2].main.temp} °F/</h4>
                <h6 class="cell small-4 text-center">Saturday</h6>
            </div>
            <div class="cell small-4 timebackground">
                <img class="cell small-4" src="http://openweathermap.org/img/wn/${data.list[3].weather[0].icon}.png" alt="">
                <h4 class="cell small-4 text-center">${data.list[3].main.temp} °F/</h4>
                <h6 class="cell small-4 text-center">Sunday</h6>
            </div>
        </div>
        <div class="grid-x grid-margin-x custom-margin-top align-center">
            <div class="cell small-4 timebackground">
                <img class="cell small-4" src="http://openweathermap.org/img/wn/${data.list[4].weather[0].icon}.png" alt="">
                <h4 class="cell small-4 text-center">${data.list[4].main.temp} °F/</h4>
                <h6 class="cell small-4 text-center">Monday</h6>
            </div>
            <div class="cell small-4 timebackground">
                <img class="cell small-4" src="http://openweathermap.org/img/wn/${data.list[5].weather[0].icon}.png" alt="">
                <h4 class="cell small-4 text-center">${data.list[5].main.temp} °F/</h4>
                <h6 class="cell small-4 text-center">Tuesday</h6>
            </div>
        </div>
    </section>`)
};