//global variables...
const gallery = document.getElementById('gallery');
const body = document.querySelector('body');

const closeBtn = document.getElementById('modal-close-btn');
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
  .then(createCard => createCards(employees))
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
  
  const cards = document.querySelectorAll('card');
  cards.addEventListener("click", (e) => {
    let target = event.target;
    console.log(target);
    //createModal(target);
  })

}

/**
*event listener to open modal
**/





/**
*creates modal and displays employees info
**/
function createModal(data) {


  const modalContainer = document.createElement("div");
  modalContainer.setAttribute("class", "modal-container");
  gallery.after(modalContainer);


  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  modal.innerHTML = '<button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>"';
  modalContainer.appendChild(modal);

  const modalInfo = document.createElement("div");
  modalInfo.setAttribute("class", "modal-info-container");
  modal.appendChild(modalInfo);
  modalInfo.innerHTML = `
  <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
  <h3 id="name" class="modal-name cap">${employees[i].name.first} ${employees[i].name.last}</h3>
  <p class="modal-text">email</p>
  <p class="modal-text cap">city</p>
  <hr>
  <p class="modal-text">(555) 555-5555</p>
  <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
  <p class="modal-text">Birthday: 10/21/2015</p>
  `
  const modalDisplay = document.querySelector("modalContainer");

}
