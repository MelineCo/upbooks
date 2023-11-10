import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    books: {
    "0988JGHYU789JKKK" : {
      id: "0988JGHYU789JKKK",
      title : "La cure anti-parasitaire",
      author : "Hulda Clark",
      upvote : 0,
      downvote: 0,
      cover: "https://m.media-amazon.com/images/I/61u-XnrTKKL._SL1500_.jpg",
      postedBy: "0001",
      postedDate: "01/01/2023",
      theme: ["Parasite", "Cure"],
      pages: 232
    },
    "0988JG89789JKKK" : {
      id: "0988JG89789JKKK",
      title : "La cure anti-sucre",
      author : "Dr Insuline",
      upvote : 0,
      downvote: 0,
      cover: "https://m.media-amazon.com/images/I/71si9Y4zl3L._SL1360_.jpg",
      postedBy: "0001",
      postedDate: "01/01/2023",
      theme: ["Insuline", "Hormones"],
      pages: 345
    }
  }
}

const booksSlice = createSlice({
    name: 'books',
    initialState: initialState,
    reducers: {
      addBook: (state, action) => {
        const { id, title, author, cover, postedBy, postedDate, theme, pages } = action.payload;
        state.books[id] = {
            id: id,
            title : title,
            author : author,
            upvote : 0,
            downvote: 0,
            cover: cover,
            postedBy: postedBy,
            postedDate: postedDate,
            theme: theme,
            pages: pages
        }
      }
    }
  })

  
  export const { addBook } = booksSlice.actions
  export default booksSlice.reducer
  export const selectBooks = (state) => state.books.books