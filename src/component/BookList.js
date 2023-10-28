import React from 'react';
import Book from './Book';
import BookForm from './BookForm';

function BookList() {
  const books = [
    {
      id: 1,
      title: 'The Help',
      author: 'Kathryn Stockett',
      category: 'Historical Fiction',
    },
    {
      id: 2,
      title: 'Bird Box',
      author: 'Josh Malerman',
      category: 'Horror',
    },
  ];
  return (
    <div>
      <ul>
        {books.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
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
