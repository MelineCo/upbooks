import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { booksApi } from "./apiSlice";

import booksReducer from '../features/books/booksSlice';
import usersReducer from '../features/users/usersSlice';
import categoriesReducer from '../features/categories/categoriesSlice';
import commentsReducer from '../features/comments/commentsSlice';
import searchReducer from '../features/search/searchSlice'


export default configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
    search: searchReducer,
    books: booksReducer, 
    users: usersReducer,
    categories: categoriesReducer,
    comments: commentsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(booksApi.middleware)
});
