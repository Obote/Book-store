import React from 'react';

function BookForm() {
  return (
    <div>
      <form>
        <input type="text" placeholder="Add Book Title" name="title" />
        <input type="text" placeholder="Add Author" name="author" />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default BookForm;