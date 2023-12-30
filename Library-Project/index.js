var addBookBtn = document.querySelector("#addBook");
var card = document.querySelector(".card");
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

addBook.addEventListener("click", addToLibrary);

//display all the added books
function displayBooks() {
  let cardContainer = document.querySelector("#card-container");
  cardContainer.innerHTML = "";
  for(let i=0; i<myLibrary.length ; i++) {
    let book = myLibrary[i];

    //create a dynamic div and input the book's details from user 
    let createDiv = document.createElement("div");
    createDiv.classList.add("full-card");
    createDiv.innerHTML = `
    <button class="delete-btn" onclick="deleteBook(${i})"><img src="./remove.png" alt="delete-img"></button>
    <div id="card-header">
    <h2>${book.title}</h2>
    <h3 id="displayAuthor">by ${book.author}</h3>
    </div>
    <div id="card-body">
    <h4>${book.pages}</h4>
    <p id="read-status">${book.read ? "Read" : "Not Read"}</p>
    </div>`;
    
    cardContainer.appendChild(createDiv);
    
  }
}

//add the book to library
function addToLibrary(e) {
  let title = document.querySelector("#bookName").value;
  let authorName = document.querySelector("#authorName").value;
  let pagesNum = document.querySelector("#pagesNum").value;
  let read = document.querySelector("#read").checked;
  
  const bokie = new Book(title, authorName, pagesNum, read);
  myLibrary.push(bokie);
  e.preventDefault();
  displayBooks();
}

//delete book from library
function deleteBook(ind) {
      myLibrary.splice(ind,1);
      displayBooks();
}