import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/bookSlice';
import categoriesReducer from './category/categorySlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    category: categoriesReducer,
  },
});

export default store;
