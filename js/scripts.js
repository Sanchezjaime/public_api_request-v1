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
fetch(url)
  .then(response => response.json())
  .then(data => {
    employees = data.results
  })
  .then(employeeCards => createCards(employees))
  .catch(error => console.log("Something went wrong", error))





/**
*function to display random users
**/
function createCards(data) {
  for (let i = 0; i < employees.length; i++) {

    const card = document.createElement("div");
    card.setAttribute("class", "card");
    gallery.appendChild(card);

    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "card-img-container");
    card.appendChild(cardContainer);

    const img = document.createElement("img");
    img.setAttribute("class", "card-img");
    img.setAttribute("src", `${employees[i].picture.large}`);
    img.setAttribute("alt", "profile picture");
    cardContainer.appendChild(img);

    const cardInfo = document.createElement("div");
    cardInfo.setAttribute("class", "card-info-container");
    card.appendChild(cardInfo);

    cardInfo.innerHTML = `
    <h3 id="name" class="card-name cap">${employees[i].name.first} ${employees[i].name.last}</h3>
    <p class="card-text">${employees[i].email}</p>
    <p class="card-text cap">${employees[i].location.city}, ${employees[i].location.state}</p>
    `
  }

}
