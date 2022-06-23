const button = document.getElementById('search');

let input = document.getElementById('inputValue').value

const topCityEl = document.getElementById('App');

const history = document.getElementById('history');

const URLs = "https://api.openweathermap.org/data/2.5/forecast?q="
const URL2 = ",us&appid="
const APIKey = "efb65fc829688895a22f36115faae923"
const imperial = '&units=imperial';

//Event Listeners one for the search button and one for the input to display the local storage that was saved.
button.addEventListener("click", fetchData)
button.addEventListener("click", getValue)

function fetchData(input) {
    let URL3 = URLs + input + URL2 + APIKey + imperial
    fetch(URL3)
    .then(response => response.json())
    .then(data => topCityEl.innerHTML = 
        `<section class="grid-container custom-margin-top">
        <div class="grid-x grid-margin-x">
            <div class="cell small-12 align-middle ">
                <h2 class="title text-center">Weather for: ${data.city.name}</h2>
                <h4 class="text-center"> Local Date & Time: ${data.list[0].dt_txt}</h4>
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
                <img class="cell small-4" src="http://openweathermap.org/img/wn/${data.list[8].weather[0].icon}.png" alt="">
                <h6 class="cell small-4 text-center">${data.list[8].weather[0].description}</h6>
                <h4 class="cell small-4 text-center">Temperature: ${data.list[8].main.temp} °F</h4>
                <h4 class="cell small-4 text-center">Humidity: ${data.list[8].main.humidity}</h4>
                <h4 class="cell small-4 text-center">Wind Speed: ${data.list[8].wind.speed} MPH</h4>
                <h6 class="cell small-4 text-center">${data.list[8].dt_txt}</h6>
            </div>
            <div class="cell small-4 timebackground">
                <img class="cell small-4" src="http://openweathermap.org/img/wn/${data.list[16].weather[0].icon}.png" alt="">
                <h6 class="cell small-4 text-center">${data.list[16].weather[0].description}</h6>
                <h4 class="cell small-4 text-center">Temperature: ${data.list[16].main.temp} °F</h4>
                <h4 class="cell small-4 text-center">Humidity: ${data.list[16].main.humidity}</h4>
                <h4 class="cell small-4 text-center">Wind Speed: ${data.list[16].wind.speed} MPH</h4>
                <h6 class="cell small-4 text-center">${data.list[16].dt_txt}</h6>
            </div>
            <div class="cell small-4 timebackground">
                <img class="cell small-4" src="http://openweathermap.org/img/wn/${data.list[24].weather[0].icon}.png" alt="">
                <h6 class="cell small-4 text-center">${data.list[24].weather[0].description}</h6>
                <h4 class="cell small-4 text-center">Temperature: ${data.list[24].main.temp} °F</h4>
                <h4 class="cell small-4 text-center">Humidity: ${data.list[24].main.humidity}</h4>
                <h4 class="cell small-4 text-center">Wind Speed: ${data.list[24].wind.speed} MPH</h4>
                <h6 class="cell small-4 text-center">${data.list[24].dt_txt}</h6>
            </div>
        </div>
        <div class="grid-x grid-margin-x custom-margin-top align-center">
            <div class="cell small-4 timebackground">
                <img class="cell small-4" src="http://openweathermap.org/img/wn/${data.list[32].weather[0].icon}.png" alt="">
                <h6 class="cell small-4 text-center">${data.list[32].weather[0].description}</h6>
                <h4 class="cell small-4 text-center">Temperature: ${data.list[32].main.temp} °F</h4>
                <h4 class="cell small-4 text-center">Humidity: ${data.list[32].main.humidity}</h4>
                <h4 class="cell small-4 text-center">Wind Speed: ${data.list[32].wind.speed} MPH</h4>
                <h6 class="cell small-4 text-center">${data.list[32].dt_txt}</h6>
            </div>
            <div class="cell small-4 timebackground">
                <img class="cell small-4" src="http://openweathermap.org/img/wn/${data.list[39].weather[0].icon}.png" alt="">
                <h6 class="cell small-4 text-center">${data.list[39].weather[0].description}</h6>
                <h4 class="cell small-4 text-center">Temperature: ${data.list[39].main.temp} °F</h4>
                <h4 class="cell small-4 text-center">Humidity: ${data.list[39].main.humidity}</h4>
                <h4 class="cell small-4 text-center">Wind Speed: ${data.list[39].wind.speed} MPH</h4>
                <h6 class="cell small-4 text-center">${data.list[39].dt_txt}</h6>
            </div>
        </div>
    </section>`)
};

let cityArray = []

function getValue() {
    let input = document.getElementById('inputValue')
    localStorage.setItem("city", JSON.stringify(input.value))
    cityArray.push(input.value)
}

let cityParsed = JSON.parse(localStorage.getItem("city"))

function cityDisplay() {
    if(localStorage.getItem("city") != null)
        history.innerHTML = `<h5 class="text-center" onclick='pushValue()'> ${cityParsed}</h5>`
}
function pushValue(){
    let input = cityParsed
    fetchData(input)
}
cityDisplay()