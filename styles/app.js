const button = document.getElementById('search')
const metric = '&units=metric'
const imperial = '&units=imperial'
const ForC = metricorimperial
const input = document.getElementById('inputValue') 


button.addEventListener('click', function(
    _fetch('api.openweathermap.org/data/2.5/forecast/daily?zip={zip code},us&cnt=6&appid='+ APIKey + ForC )
);
