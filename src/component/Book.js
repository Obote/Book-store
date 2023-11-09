import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch } from "react-redux";
import { PropTypes } from "prop-types";
import { removeBook } from "../redux/books/bookSlice";

function Book({ title, author, category, itemId }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeBook(itemId));
  };
  return (
    <div>
      <ul>
        <li>{author}</li>
        <li>{title}</li>
        <li>{category}</li>
      </ul>
      <button onClick={handleDelete} type="button">
        Remove Book
      </button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};

export default Book;
