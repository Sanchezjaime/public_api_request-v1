//global variables...
const gallery = document.getElementById('gallery');
let employees = [];

/**
*fetch functions
**/
const url = "https://randomuser.me/api/?results=12";

/**
*sends a single requests to the API to fetch random users
**/
fetch("https://randomuser.me/api/?results=12")
  .then(response => response.json())
  .then(data => {
    employees = data.results
  })
  .then(employeeList => console.log(employees))


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
  img.setAttribute("src", `${employees[0].picture.large}`);
  img.setAttribute("alt", "profile picture");
  cardContainer.appendChild(img);

  const cardInfo = document.createElement("div");
  cardInfo.setAttribute("class", "card-info-container");
  card.appendChild(cardInfo);

  cardInfo.innerHTML = `
  <h3 id="name" class="card-name cap">${employees[0].name.first} ${employees[0].name.last}</h3>
  <p class="card-text">${employees[0].email}</p>
  <p class="card-text cap">${employees[0].location.city}, ${employees[0].location.state}</p>
  `

}
