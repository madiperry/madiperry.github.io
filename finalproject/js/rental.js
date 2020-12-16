const requestURL = 'https://madiperry.github.io/finalproject/data/rental.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);  // temporary checking for valid response and data parsing
        const price = jsonObject['price'];
        for (let i = 0; i < price.length; i++ ) {
          let card = document.createElement('section');
          let h3 = document.createElement('h2');
          let maxpersons = document.createElement('p');
          let reshalfday = document.createElement('p');
          let resfullday =document.createElement('p');
          let walkhalfday =document.createElement('p');
          let walkfullday =document.createElement('p');
          let image = document.createElement("img");
    
          h3.textContent = price[i].rentaltype;
          maxpersons.textContent ='Max Persons: '+ price[i].maxpersons;
          reshalfday.textContent = 'Reservation Half-day: '+ price[i].reshalfday;
          resfullday.textContent = 'Reservation Fullday: '+ price[i].resfullday;
          walkhalfday.textContent ='Walk-in Half-day: '+ price[i].walkhalfday;
          walkfullday.textContent = 'Walk-in Fullday: '+ price[i].walkfullday;
          image.setAttribute('src', price[i].imagesrc);
          image.setAttribute('alt', price[i].rentaltype);
    
          card.appendChild(h3);
          card.appendChild(maxpersons);
          card.appendChild(reshalfday);
          card.appendChild(resfullday);
          card.appendChild(walkhalfday);
          card.appendChild(walkfullday);
          card.appendChild(image);
        
        document.querySelector('div.cards').appendChild(card);
        }
    });