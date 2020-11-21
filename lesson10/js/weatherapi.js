const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=40bfc11ee6cf5d36b6419656660b977d";
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=40bfc11ee6cf5d36b6419656660b977d";

fetch(apiURL)
    .then(response => response.json())
    .then(jsObject => {
        console.log(jsObject);
    
        const curcon = document.querySelector('#curcon');
        const curtemp = document.querySelector('#current-temp');
        const hum = document.querySelector('#humidity');
        const ws= document.querySelector('#winds');
        const weathericon = document.querySelector('#icon');

        curtemp.innerHTML = (Math.round(jsObject.main.temp));
        hum.innerHTML = jsObject.main.humidity;
        ws.innerHTML = jsObject.wind.speed;
        curcon.innerHTML = jsObject.weather[0].main;


    });

fetch(forecastURL)
    .then(response => response.json())
    .then(jsObject => {
        console.log(jsObject);

        let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];


        let first = document.getElementsByClassName("first");
        let ficon = document.getElementsByClassName("ficon");
        let data = jsObject.list.filter(item => item.dt_txt.includes("18:00:00"));
        let ftemp = document.getElementsByClassName("fortemp");

        for (let i=0; i< data.length; i++) {
            let d = new Date(data[i].dt_txt);

            first[i].innerHTML = weekday[d.getDay()];

            const fIcon = 'https://openweathermap.org/img/w/' +data[i].weather[0].icon + '.png';
            const description = data[i].weather[0].description;
            ficon[i].setAttribute('src', fIcon);
            ficon[i].setAttribute('alt', description);

            fortemp[i].innerHTML = Math.round(data[i].main.temp) + "&deg;F"; 
        }
    });
