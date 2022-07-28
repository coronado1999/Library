const openAddBookButtons = document.querySelectorAll('[data-book-target]')
const closeAddBookButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const tableRow = document.querySelector('.tableBook')
const changeBtn = document.querySelector('.read')
const changeBtn2 = document.querySelector('.notRead')
const submit = document.querySelectorAll('.btn')

openAddBookButtons.forEach(button => {
    button.addEventListener('click', () => {
        const book = document.querySelector(button.dataset.bookTarget)
        openBook(book)

    })
})

function openBook(book) {
    if (book == null) return
    addBook.classList.add('active')
    overlay.classList.add('active')
}

closeAddBookButtons.forEach(button => {
    button.addEventListener('click', () => {
        const book = button.closest('.addBook')
        closeBook(book)
    })
})


function closeBook(book) {
    if (book == null) return
    addBook.classList.remove('active')
    overlay.classList.remove('active')
    titleBook = document.getElementById("title").value = "";
    author = document.getElementById("author").value = "";
    pages = document.getElementById("pages").value = "";
    const yesBtn = document.getElementById('yes');
    yesBtn.checked = true;
    yesBtn.checked = false;
}

overlay.addEventListener('click', () => {
    const books = document.querySelectorAll('.addBook.active')
    books.forEach(book => {
        closeBook(book)
    })
})

let myLibrary = [];
console.log(myLibrary)

function Book(title, author, pages, read) {
    // the constructor...
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    // do stuff here
    var titleBook = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var pages = document.getElementById("pages").value;
    var table = document.getElementById("myTable");
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = `${titleBook}`;
    cell2.innerHTML = `${author}`;
    cell3.innerHTML = `${pages}`;
    cell4.innerHTML = `<button class="delete" onclick="rowRemove()">&times;</button>`
    if (document.getElementById('yes').checked) {
        var cell4 = row.insertCell(3);
        cell4.innerHTML = `<button id ="btnRead" class="btn">YES</button> <style> .btn {background-color: green; border-radius: 20px; width: 50px; color: white;}</style>`;

        let index = 0;
        let textIndex = ['no', 'yes'];

        let colors = ['Red', 'Green'];


        document.querySelectorAll(".btn").forEach(btn => btn.addEventListener('click', function onClick() {
            this.style.backgroundColor = colors[index].toLowerCase();
            this.style.color = 'white';
            this.textText = "yes";
            this.innerHTML = textIndex[index].toUpperCase();

            index = index >= colors.length - 1 ? 0 : index + 1;
            textIndex = textIndex >= text.length - 1 ? 0 : textIndex + 1;
        }));

    } else if (document.getElementById('no').checked) {
        var cell4 = row.insertCell(3);
        cell4.innerHTML = `<button id ="btnNotRead" class="btn">NO</button> <style> .btn {border-radius: 20px; background-color: red; width: 50px; color: white;}</style>`;

        let index2 = 0;
        let textIndex2 = ['yes', 'no'];

        let colors = ['Green', 'Red'];


        document.querySelectorAll(".btn").forEach(item => item.addEventListener('click', function onClick() {
            this.style.backgroundColor = colors[index2].toLowerCase();
            this.style.color = 'white';
            this.textText = "yes";
            this.innerHTML = textIndex2[index2].toUpperCase();

            index2 = index2 >= colors.length - 1 ? 0 : index2 + 1;
        }));
    }
    myLibrary.push(`Title: ${titleBook}, Author: ${author}, Pages: ${pages}`);
}

function rowRemove() {
    tableRow.addEventListener('click', e => {

        if (e.target.classList.contains('delete')) {
            e.target.parentElement.parentElement.remove();
        }
    });
}