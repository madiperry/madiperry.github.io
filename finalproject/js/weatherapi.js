const apiURL = "http://api.openweathermap.org/data/2.5/weather?q=cozumel&units=imperial&appid=40bfc11ee6cf5d36b6419656660b977d";


fetch(apiURL)
    .then(response => response.json())
    .then(jsObject => {
        console.log(jsObject);
    
        const condition = document.querySelector('#condition');
        const temperature = document.querySelector('#temperature');
        const humidity = document.querySelector('#humidity');

        temperature.innerHTML = (Math.round(jsObject.main.temp));
        humidity.innerHTML = jsObject.main.humidity;
        condition.innerHTML = jsObject.weather[0].main;
    });