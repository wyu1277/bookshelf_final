export default class Bookshelf {
    constructor(){
        this.books = [];
        this.favorites = [];
        this.filtered = [];
    }
    //this is all the basic methods that will be called again in our render functions
    addBook(book){
        this.books.push(book);
    }

    addFav(book){
        this.favorites.push(book);
    }

    removeFav(book){
        this.favorites = this.favorites.filter((favBook)=> favBook !== book)
        this.renderFavorites();
    }

    renderAlphabetical(){
        this.books.sort((a,b)=>{
            if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
            return -1;
        })
        this.render()
    }

    renderReverseAlpha(){
        this.books.sort((a,b)=>{
            if (a.title.toLowerCase() < b.title.toLowerCase()) return 1;
            return -1;
        })
        this.render()
    }
    
    renderTopics(){
        this.books.sort((a,b)=>{
            if (a.subject.length > b.subject.length) return 1
            return -1;
        })
        this.render()
    }

    search(input){
        this.filtered = this.books.filter((book)=> book.title.includes(input))
        this.renderFiltered()
    }

    removeBook(book){
        this.books = this.books.filter((currBook)=> currBook !== book);
        this.render();
    }
    
    render(){
        const shelfUl = document.querySelector('#book_shelf');
        // clear DOM
        shelfUl.innerHTML = '';
        shelfUl.style.display = 'flex';
        shelfUl.style.flexWrap = 'wrap';
        shelfUl.style.listStyle = 'none';
        
        this.books.map((book)=>{
            let booksIn= book.render();
            
            //adding functionality to btns
            const favBtn = booksIn.querySelector('.favBtn')
            favBtn.addEventListener('click', ()=>{
                if (!this.favorites.includes(book)) {
                    this.addFav(book)
                }
                else{
                    this.removeFav(book)
                }
            })

            const showComments = booksIn.querySelector('.showCommentsBtn');
            showComments.addEventListener('click', ()=>{
                book.showComments = !book.showComments;
                this.render()
            })
            if(book.showComments){
                const commentForm = booksIn.querySelector('.commentForm');
                commentForm.addEventListener('submit', (e)=>{
                book.addComment(e.target[0].value);
                this.render()
                })
            }
            
            const deleteBtn = booksIn.querySelector('.deleteBtn');
            deleteBtn.addEventListener('click', ()=>{
                this.removeBook(book);
            })

            shelfUl.append(booksIn)

        })
        //end of map
    }
    // copying the above functionality for the rendering the fav and our filters
    renderFavorites(){
        const shelfUl = document.querySelector('#book_shelf');
        shelfUl.innerHTML = '';

        shelfUl.style.display = 'flex';
        shelfUl.style.flexWrap = 'wrap';
        shelfUl.style.listStyle = 'none';

        this.favorites.map((book) =>{
            const booksIn = book.render();
            const favBtn = booksIn.querySelector('button');
            favBtn.addEventListener('click', ()=>{
                if(!this.favorites.includes(book)){
                    this.addFav(book)
                }
                else{
                    this.removeFav(book)
                }
            })

            const showComments = booksIn.querySelector('.showCommentsBtn');
            showComments.addEventListener('click', ()=>{
                book.showComments = !book.showComments;
                this.render()
            })
            if(book.showComments){
                const commentForm = booksIn.querySelector('.commentForm');
                commentForm.addEventListener('submit', (e)=>{
                book.addComment(e.target[0].value)
                this.render()
                })
            }
            
            const deleteBtn = booksIn.querySelector('.deleteBtn');
            deleteBtn.addEventListener('click', ()=>{
                this.removeBook(book);
            })

            shelfUl.append(booksIn)
        })
    }

    renderFiltered(){
        const shelfUl = document.querySelector('#book_shelf');
        shelfUl.innerHTML = '';

        shelfUl.style.display = 'flex';
        shelfUl.style.flexWrap = 'wrap';
        shelfUl.style.listStyle = 'none';

        this.filtered.map((book) =>{
            const booksIn = book.render();
            const favBtn = booksIn.querySelector('button');
            favBtn.addEventListener('click', ()=>{
                if(!this.favorites.includes(book)){
                    this.addFav(book)
                }
                else{
                    this.removeFav(book)
                }
            })

            const showComments = booksIn.querySelector('.showCommentsBtn');
            showComments.addEventListener('click', ()=>{
                book.showComments = !book.showComments;
                this.render()
            })
            if(book.showComments){
                const commentForm = booksIn.querySelector('.commentForm');
                commentForm.addEventListener('submit', (e)=>{
                book.addComment(e.target[0].value)
                this.render()
                })
            }
            
            const deleteBtn = booksIn.querySelector('.deleteBtn');
            deleteBtn.addEventListener('click', ()=>{
                this.removeBook(book);
            })

            shelfUl.append(booksIn)
        })
    }

}