import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';

function BookList() {
  const books = useSelector((state) => state.books.books);
  return (
    <div>
      <ul>
        {books.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
            itemId={book.itemId}
          />
        ))}
      </ul>
      <div>
        <BookForm />
      </div>
    </div>
  );
}
export default BookList;
