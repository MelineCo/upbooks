import { configureStore } from "@reduxjs/toolkit";

import booksReducer from '../features/books/booksSlice';
import usersReducer from '../features/users/usersSlice';
import themesReducer from '../features/themes/themesSlice';
import commentsReducer from '../features/comments/commentsSlice';


export default configureStore({
  reducer: {
    books: booksReducer, 
    users: usersReducer,
    themes: themesReducer,
    comments: commentsReducer
  }
});
