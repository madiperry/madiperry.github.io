const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const town = jsonObject['towns'];
    for (let i = 0; i < town.length; i++) {
        if (town[i].name=="Preston") {
            let card = document.createElement('section');
            
           let events = document.createElement('div');
     
           
           events.textContent = 'Events: ' +town[i].events;
         
           card.appendChild(events);
         
         document.querySelector('div.cards').appendChild(card);
          }}
      });
    