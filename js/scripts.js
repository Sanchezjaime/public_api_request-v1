//global variables...
const gallery = document.getElementById('gallery');
const employees = [];

/**
*fetch functions
**/
const url = "https://randomuser.me/api/?results=12";

/**
*sends a single requests to the API to fetch random users
**/
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))

/**
*function to display random users
**/
function createCards(data) {

  const card = document.createElement("div");
  card.setAttribute("class", "card");
  gallery.appendChild(card);

  const cardContainer = document.createElement("div");
  cardContainer.setAttribute("class", "card-img-container");
  card.appendChild(cardContainer);

  const img = document.createElement("img");
  img.setAttribute("class", "card-img");
  img.setAttribute("src", "https://placehold.it/90x90");
  img.setAttribute("alt", "profile picture");
  cardContainer.appendChild(img);

  const cardInfo = document.createElement("div");
  cardInfo.setAttribute("class", "card-info-container");
  card.appendChild(cardInfo);

  cardInfo.innerHTML = `
  <h3 id="name" class="card-name cap">first last</h3>
  <p class="card-text">email</p>
  <p class="card-text cap">city, state</p>
  `

}
