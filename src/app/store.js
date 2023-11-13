import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { booksApi } from "./apiSlice";

import booksReducer from '../features/books/booksSlice';
import usersReducer from '../features/users/usersSlice';
import themesReducer from '../features/themes/themesSlice';
import commentsReducer from '../features/comments/commentsSlice';
import searchReducer from '../features/search/searchSlice'


export default configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
    search: searchReducer,
    books: booksReducer, 
    users: usersReducer,
    themes: themesReducer,
    comments: commentsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(booksApi.middleware)
});
