console.log("My Library!!");

// for book
function Book(book, author, type) {
  this.book = book;
  this.author = author;
  this.type = type;
}

// to display the book list
function Display() {
  
}

// add book List
Display.prototype.add = function (book) {
  let tableBody = document.getElementById("tableBody");
  let uiString;
  uiString = `
              <tr>
                  <td>${book.book}</td>
                  <td>${book.author}</td>
                  <td>${book.type}</td>
              </tr>`;
  tableBody.innerHTML += uiString;
  console.log(book.book);
  console.log(book.author);
  console.log(book.type);
};

// to clear the form
Display.prototype.clear = function () {
  let form = document.getElementById("libraryform");
  form.reset();
};

// form validation 
Display.prototype.validation = function(book){
    if(book.book.length <= 2 || book.author.length <= 2){
      // console.log("can't be a short!!");
      return false;
    }else{
      return true;
    }
}
// display you have issued or not book 
Display.prototype.show = function(type,givenMessage){
    let message = document.getElementById("message");
    console.log(message);
    let msg = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Message: </strong> ${givenMessage}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
    `;
    message.innerHTML = msg;
    setTimeout(() => {
      message.innerHTML = "";
    }, 3000);
}

let submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  // console.log("you clicked submit btn");
  let bookName = document.getElementById("book").value;
  let author = document.getElementById("author").value;
  let type;
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");
  let comics = document.getElementById("comics");
  if (programming.checked) {
    type = programming.value;
  } else if (cooking.checked) {
    type = cooking.value;
  } else if (comics.checked) {
    type = comics.value;
  }
  let book = new Book(bookName, author, type);
  // console.log(book);
  let display = new Display();
  // validation 
  if(display.validation(book)){
    display.add(book);
    display.clear();
    display.show("success","You have successfully issued a book");

  }else{
    display.show("danger","You cann't add a book whithout Book Or author Name");
  }
});
