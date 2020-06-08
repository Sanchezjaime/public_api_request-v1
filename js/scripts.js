//global variables...
const gallery = document.getElementById('gallery');
const body = document.querySelector('body');


let employees = [];
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
*function to display random users and set an addEventListener to each card
**/
function createCards(data) {
  for (let i = 0; i < employees.length; i++) {
//creates card div
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    gallery.appendChild(card);
//appends children to card div with data from json
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
//event listener to create modal for selected employee
    card.addEventListener('click', (e) => {
      let target = employees[i];
      //console.log(target);
      createModal(target);
    })
  }
}


/**
*creates modal and displays employees info
**/
function createModal(data) {
//variable to set json date data to month/date/year format string
  let birthday = new Date(data.dob.date).toLocaleDateString();
  //console.log(birthday);
//creates modal div and appends children elements
  const modalContainer = document.createElement("div");
  modalContainer.setAttribute("class", "modal-container");
  gallery.after(modalContainer);

  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  modal.innerHTML = '<button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>"';
  modalContainer.appendChild(modal);
//set json data for selected employee to modal info
  const modalInfo = document.createElement("div");
  modalInfo.setAttribute("class", "modal-info-container");
  modal.appendChild(modalInfo);
  modalInfo.innerHTML = `
  <img class="modal-img" src=${data.picture.large} alt="profile picture">
  <h3 id="name" class="modal-name cap">${data.name.first} ${data.name.last}</h3>
  <p class="modal-text">${data.email}</p>
  <p class="modal-text cap">${data.location.city}</p>
  <hr>
  <p class="modal-text">${data.cell}</p>
  <p class="modal-text">${data.location.street.number} ${data.location.street.name}, ${data.location.city}, ${data.location.state} ${data.location.postcode}</p>
  <p class="modal-text">Birthday: ${birthday}</p>
  `
//event listener to close modal and remove modal element from html
  const closeBtn = document.getElementById('modal-close-btn');
  const modalDisplay = document.getElementsByClassName("modalContainer");
  closeBtn.addEventListener('click', (e) => {
    body.removeChild(modalContainer);
  })

}
