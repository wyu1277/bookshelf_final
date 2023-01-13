export default class Book {
    constructor(author, language, subject, title){
        this.author = author;
        this.language = language;
        this.subject =  subject;
        this.title = title;
        this.comments = [];
        this.showComments = false;
        //this will be used to hide the comments before it is pressed
    }
    //this will add our comments to our comments array
    addComment(comment){
        this.comments.push(comment)
    }
    render(){
        // create a list element to contain each instance of book
        const bookLi = document.createElement('li');

        bookLi.style.width = '30%';
        bookLi.style.height = '300px';
        bookLi.style.margin = '12px';
        bookLi.style.overflow = 'scroll'; //this will allow our containers to stay the same size without having to worry about the contents inside
        bookLi.style.display = 'flex';
        bookLi.style.marginLeft = '2px';
        bookLi.style.background = '#B7C3F3'
        bookLi.style.display = 'flex';
        bookLi.style.flexDirection = 'column';
        // create ul for all the book's information to exist in and append it to the overall book li
        const liContent = document.createElement('ul');
        // create li for each of the books info and append it to ul. Im choosing to render the title first because of information hierarchy for a book.
        const bookTitle = document.createElement('li');
        bookTitle.innerHTML = `Title: ${this.title}`;
        bookTitle.style.margin = '12px';
        bookTitle.style.listStyle = 'none';

        const bookAuth = document.createElement('li');
        bookAuth.innerHTML = `Author: ${this.author}`;
        bookAuth.style.margin = '12px';
        bookAuth.style.listStyle = 'none';

        const bookLang = document.createElement('li');
        bookLang.innerHTML = `Language: ${this.language}`;
        bookLang.style.margin = '12px';
        bookLang.style.listStyle = 'none';

        const bookSubj = document.createElement('ul');
        bookSubj.innerHTML = 'Subjects:'
        // this for of loop will iterate through our subject values and append them to our li and then append the li to out subjects ul
        for(const sub of this.subject){
          const subEle = document.createElement('li');
          subEle.innerHTML = sub;
          subEle.style.margin = '4px';
          bookSubj.append(subEle);
        }
       
        bookSubj.style.listStyle = 'none';
        //creating buttons, no functionality yet
        const favBtn = document.createElement('button');
        favBtn.classList.add('favBtn');
        favBtn.innerHTML = 'Add to Favorites';
        favBtn.style.marginTop = '8px';

        const commentForm = document.createElement('form');

        const showCommentsBtn = document.createElement('button');
        showCommentsBtn.classList.add('showCommentsBtn');
        showCommentsBtn.innerHTML = 'Show Comments';
        showCommentsBtn.style.marginTop = '8px';

        const commentList = document.createElement('ul');
        commentList.style.marginTop = '8px'
        //this will determine what show comments button will show when true
        if (this.showComments){
            commentForm.classList.add('commentForm');
            const commentText = document.createElement('textarea');
            commentText.style.margin = '10px'
            commentText.style.marginLeft = '20px'
            commentText.rows = '5'
            commentText.style.width = '85%'
            commentText.style.fontSize = '22px'
            commentText.style.padding = '8px'

            const commentBtn = document.createElement('button');
            commentBtn.setAttribute('type', 'submit')
            commentBtn.innerHTML = 'Submit Comment';
            commentForm.append(commentText,commentBtn);
            showCommentsBtn.innerHTML = 'Hide Comments';
            //this will load up the comment list with comment li's
            this.comments.map((comment)=>{
                const commentElm = document.createElement('li');
                commentElm.style.fontSize = '22px'
                commentElm.style.margin = '12px'

                commentElm.innerHTML = comment;
                commentList.append(commentElm);
            })
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'Remove Book';
        deleteBtn.style.marginBottom = '8px';
        deleteBtn.classList.add('deleteBtn')

        liContent.append(bookTitle, bookAuth, bookLang, bookSubj);
        bookLi.append(liContent, favBtn, showCommentsBtn, commentForm, commentList, deleteBtn)

        return bookLi;
    }
}