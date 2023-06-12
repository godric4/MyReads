import React from 'react'


/**
* @description This is the individual book component
* @param {changeShelf} prop - function to move a book between shelves
* @param {book} prop - individual book passed from Bookshelf.js
*/

const Book = ({book, changeShelf}) => {

  return (
    <div className="book">
      <div className="book-top">
        <div 
        className="book-cover"
        style={{ width: 128, 
                 height: 193,  
                 backgroundImage:`url(${book.imageLinks ? book.imageLinks.thumbnail : ""})`}}>   </div>
            {/* Book Shelf Changer */}
        <div className="book-shelf-changer">
          <select value={book.shelf} onChange={(e) => changeShelf(book, e.target.value)}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
        {/* Book Details */}
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  )
}

export default Book
