import React from 'react';
import BookList from './BookList';
import BookForm from './BookForm';

function MyBooks() {
  return (
    <>
      <div>
        <BookList />
        <BookForm />
      </div>
    </>
  );
}

export default MyBooks;
