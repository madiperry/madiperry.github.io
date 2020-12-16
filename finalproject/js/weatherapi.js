const apiURL = "http://api.openweathermap.org/data/2.5/weather?q=cozumel&units=imperial&appid=40bfc11ee6cf5d36b6419656660b977d";
const forecastURL = "http://api.openweathermap.org/data/2.5/forecast?q=cozumel&units=imperial&appid=40bfc11ee6cf5d36b6419656660b977d";


fetch(apiURL)
    .then(response => response.json())
    .then(jsObject => {
        /* console.log(jsObject); */
    
        const condition = document.querySelector('#condition');
        const temperature = document.querySelector('#temperature');
        const humidity = document.querySelector('#humidity');

        temperature.innerHTML = (Math.round(jsObject.main.temp));
        humidity.innerHTML = jsObject.main.humidity;
        condition.innerHTML = jsObject.weather[0].main;
    });

fetch(forecastURL)
    .then(response => response.json())
    .then(jsObject => {
        console.log(jsObject);

        let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];


        let first = document.getElementsByClassName("first");
        let ficon = document.getElementsByClassName("fimg");
        let forecast = jsObject.list.filter(item => item.dt_txt.includes("18:00:00"));
        let fortemp = document.getElementsByClassName('fortemp');
        
        for (let day=0; day< forecast.length; day++) {
            let d = new Date(forecast[day].dt_txt);

            first[day].innerHTML = weekday[d.getDay()];

            const fimg = 'https://openweathermap.org/img/w/' + forecast[day].weather[0].icon + '.png';
            const description = forecast[day].weather[0].description;
            ficon[day].setAttribute('src', fimg);
            ficon[day].setAttribute('alt', description);

            fortemp[day].innerHTML = Math.round(forecast[day].main.temp) + "&deg;F"; 
        }

    });

        