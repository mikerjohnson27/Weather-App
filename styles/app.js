const button = document.getElementById('search');
// const metric = '&units=metric';
// const imperial = '&units=imperial';
// const ForC = metricorimperial;
const input = document.getElementById('inputValue').value;

const APIKey = 

const Geocoding_API ="api.openweathermap.org/data/2.5/forecast/daily?zip={zip code},{country code}&appid={API key}"

function fetchdata() {
    fetch("https://api.openweathermap.org/data/2.5/forecast?zip=03060,US&cnt=40&appid=")
    .then(response => {
        return response.json();
    }).then(data => {
        console.log(data)
    });
}
fetchdata();