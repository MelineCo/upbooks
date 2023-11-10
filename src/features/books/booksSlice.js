import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    books: {}
}

const usersSlice = createSlice({
    name: 'books',
    initialState: initialState,
    reducers: {
      addBook: (state, action) => {
        const { id, title, author, cover, postedBy, postedDate, theme } = action.payload;
        state.books[id] = {
            id: id,
            title : title,
            author : author,
            upvote : 0,
            downvote: 0,
            cover: cover,
            postedBy: postedBy,
            postedDate: postedDate,
            theme: theme
        }
      }
    }
  })

  
  export const { addBook } = booksSlice.actions
  export default booksSlice.reducer