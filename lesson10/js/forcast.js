const apiURL = "https://api.openweathermap.org/data/2.5/weather?id-5604473&units-imperial&APPID-40bfc11ee6cf5d36b6419656660b977d";


fetch(apiURl)
    .then(response => response.json())
    .then(jsObject => {
        console.log(js.Object);
    
    });