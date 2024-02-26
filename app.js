const container = document.querySelector(".container");
const main = document.querySelector(".main-card");
const h3 = document.querySelector("h3");
const API = "https://restcountries.com/v3.1/all";

const getData = async (resurse) => {
  try {
    const regect = await fetch(resurse);
    const data = await regect.json();
    data.forEach((element) => {
      const { flags, capital, name, population, region, maps } = element;
      console.log(element);
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = ` 
      <img class="box" src="${flags.png}" alt="${capital}">
      <h3>Davlat nomi : ${name.common}</h3>
      <p>Poytaxti : ${capital}</p>
      <p>Aholisi : ${population}</p>
      <p>Qit'a : ${region}</p><br><br><br>
      <a href="${maps.googleMaps}">Google Maps</a>      
      `;
      main.appendChild(card);
      container.appendChild(main);
    });
  } catch (error) {
    console.log(error);
  }
};
getData(API);
