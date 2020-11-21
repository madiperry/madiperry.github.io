const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=40bfc11ee6cf5d36b6419656660b977d";


fetch(apiURL)
    .then(response => response.json())
    .then(jsObject => {
        console.log(jsObject);
    
        const curcon = document.querySelector('#curcon');
        const curtemp = document.querySelector('#current-temp');
        const hum = document.querySelector('#humidity');
        const ws= document.querySelector('#winds');
        const weathericon = document.querySelector('#icon');

        curtemp.innerHTML = jsObject.main.temp;
        hum.innerHTML = jsObject.main.humidity;
        ws.innerHTML = jsObject.wind.speed;
        curcon.innerHTML = jsObject.weather.main;

        const iconsrc = 'https://openweathermap.org/img/w/$(jsObject.weather[0].icon).png';
        

    });