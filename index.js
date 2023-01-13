import Book from './js/book.js';
import BookShelf from './js/bookshelf.js';
import data from './js/book-data.js';

const shelfIns = new BookShelf();

for(const book of data){
        const booksIn = new Book(book.author, book.language, book.subject, book.title);
        shelfIns.addBook(booksIn);
    } 

//grabbing our buttons and input
const all = document.querySelector('#all')
const favs = document.querySelector('#favs')
const select = document.querySelector('#dropdown')
const addForm = document.querySelector('#add_form');
const searchInput = document.querySelector('#search_input')

//adding functionality
// Using input here instead of click so that every time it register an input, it will search and render
searchInput.addEventListener('input', ()=> {
    shelfIns.search(searchInput.value);
})

addForm.addEventListener('submit', (e) => {
    e.preventDefault(); //this is needed so that the submit button doesnt refresh the page
    const title = e.target[0].value;
    const author = e.target[1].value;
    const language = e.target[2].value;
    const subjects = e.target[3].value.split(', ');
    const bookToAdd = new Book(author, language, subjects, title);
    shelfIns.addBook(bookToAdd)
    shelfIns.render();
    addForm.reset()
    })

all.addEventListener('click', () => {
        shelfIns.render();
    })
    
favs.addEventListener('click', () =>{
        shelfIns.renderFavorites();
    })
    
select.addEventListener('change', ()=> {
    if(select.value === 'alphabetical'){
        shelfIns.renderAlphabetical();
    }
    if(select.value === 'reverse'){
        shelfIns.renderReverseAlpha();
    }
    if(select.value === 'topics'){
        shelfIns.renderTopics();
    }
})