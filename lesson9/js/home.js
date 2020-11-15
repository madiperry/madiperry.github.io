const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const town = jsonObject['towns'];
    for (let i = 0; i < town.length; i++) {
      let card = document.createElement('section');
      let h2 = document.createElement('h3');
      let photo = document.createElement('img');
      let motto = document.createElement('h3');
      let founded = document.createElement('p');
      let population = document.createElement('p');
      let rainfall = document.createElement('p');
      let events = document.createElement('div');

      h2.textContent = town[i].name;
      motto.textContent = town[i].motto;
      founded.textContent = 'Year Founded: '+ town[i].yearFounded;
      population.textContent = 'Current Population: '+ town[i].currentPopulation;
      rainfall.textContent = 'Average Rainfall: '+ town[i].averageRainfall;
      events.textContent = 'Events: '+ town[i].events;
      photo.setAttribute('src', town[i].photo);
      photo.setAttribute('alt', town[i].name);

      card.appendChild(h2);
      card.appendChild(photo);
      card.appendChild(motto);
      card.appendChild(founded);
      card.appendChild(population);
      card.appendChild(rainfall);
      card.appendChild(events);
    
    document.querySelector('div.cards').appendChild(card);
    }
});