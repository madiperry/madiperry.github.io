const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=40bfc11ee6cf5d36b6419656660b977d";
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=40bfc11ee6cf5d36b6419656660b977d";

fetch(apiURL)
    .then(response => response.json())
    .then(jsObject => {
    
        const curcon = document.querySelector('#curcon');
        const curtemp = document.querySelector('#current-temp');
        const hum = document.querySelector('#humidity');
        const ws= document.querySelector('#winds');

        curtemp.innerHTML = (Math.round(jsObject.main.temp));
        hum.innerHTML = jsObject.main.humidity;
        ws.innerHTML = jsObject.wind.speed;
        curcon.innerHTML = jsObject.weather[0].main;

        let t = (Math.round(jsObject.main.temp));
        let s = (Math.round(jsObject.main.speed));;
        if (t <= 50 && s >= 3) {
            let c = (35.74 + (0.6215 * t)) - (35.75 * (Math.pow(s, 0.16))) + (0.4275 * (t * (Math.pow (s, 0.16))));
            chill=Math.round(c);
        } else{
            chill="N/A"
        }
    });

fetch(forecastURL)
    .then(response => response.json())
    .then(jsObject => {
        console.log(jsObject);

        let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];


        let first = document.getElementsByClassName("first");
        let fimg = document.getElementsByClassName("fimg");
        let forecast = jsObject.list.filter(item => item.dt_txt.includes("18:00:00"));
        
        for (let day=0; day< forecast.length; day++) {
            let d = new Date(forecast[day].dt_txt);

            first[day].innerHTML = weekday[d.getDay()];

            const fimg = 'https://openweathermap.org/img/w/' + forecast[day].weather[0].img + '.png';
            const description = forecast[day].weather[0].description;
            fimg[day].setAttribute('src', fimg);
            fimg[day].setAttribute('alt', description);

            fortemp[day].innerHTML = Math.round(forecast[day].main.temp) + "&deg;F"; 
        }
    });
