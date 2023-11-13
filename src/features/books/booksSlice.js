import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    books: {
    "0988JGHYU789JKKjui" : {
      id: "0988JGHYU789JKKjui",
      title : "Hormone Repair Manual: Every Woman's Guide to Healthy Hormones After 40",
      authors : "Lara Briden",
      votes : 145,
      cover: "https://m.media-amazon.com/images/I/4126yKKWJyL.jpg",
      categories: ["Hormones"],
      pages: 202,
      comments: ["awesome", "well written"]
    },
    "0988JG89789Jtyh" : {
      id: "0988JG89789Jtyh",
      title : "Period repair manual",
      authors : "Lara Briden",
      votes : 81,
      cover: "https://m.media-amazon.com/images/I/51pVfi-MDML.jpg",
      categories: ["Insuline", "Hormones"],
      pages: 345,
      comments: ["very insightful", "could be better", "dissapointed"]
    },
  }
}

const booksSlice = createSlice({
    name: 'books',
    initialState: initialState,
    reducers: {
      addBook: (state, action) => {
        const { id, title, authors, ratingCount, thumbnail, categories, pageCount } = action.payload;
        state.books[id] = {
          id: id,
          title : title,
          authors : authors,
          votes : ratingCount,
          cover: thumbnail,
          categories: categories,
          pageCount: pageCount,
          comments: []
        }
      },
      upvote: (state, action) => {
        const { id } = action.payload;
        if(state.books[id]){
          state.books[id].votes += 1;
        }
      }
    }
  })

  
  export const { addBook, upvote } = booksSlice.actions
  export default booksSlice.reducer
  export const selectBooks = (state) => state.books.books

 