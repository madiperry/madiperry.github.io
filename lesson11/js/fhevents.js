
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const town = jsonObject['towns'];
    for (let i = 0; i < town.length; i++) {
        if(town[i].name=="Fish Haven") {
    let card = document.createElement('section');
    let h2 = document.createElement('h3');
    let events = document.createElement('div');

    h2.textContent = town[i].name;
    events.textContent = 'Events: '+ town[i].events;

     card.appendChild(h2);
    card.appendChild(events);

    document.querySelector('div.cards').appendChild(card);}
  }
});