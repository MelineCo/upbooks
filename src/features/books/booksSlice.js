import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    books: {
    "0988JGHYU789JKKK" : {
      id: "0988JGHYU789JKKK",
      title : "La cure anti-parasitaire",
      author : "Hulda Clark",
      votes : 535,
      cover: "https://m.media-amazon.com/images/I/61u-XnrTKKL._SL1500_.jpg",
      postedBy: "0001",
      postedDate: "01/01/2023",
      theme: ["Parasite", "Cure"],
      pages: 232,
      comments: ["awesome", "well written"]
    },
    "0988JG89789JKKK" : {
      id: "0988JG89789JKKK",
      title : "La cure anti-sucre",
      author : "Dr Insuline",
      votes : 41,
      cover: "https://m.media-amazon.com/images/I/71si9Y4zl3L._SL1360_.jpg",
      postedBy: "0001",
      postedDate: "01/01/2023",
      theme: ["Insuline", "Hormones"],
      pages: 345,
      comments: ["very insightful", "could be better", "dissapointed"]
    },
    "0988JGHYU789JKKjui" : {
      id: "0988JGHYU789JKKjui",
      title : "Hormone Repair Manual: Every Woman's Guide to Healthy Hormones After 40",
      author : "Lara Briden",
      votes : 145,
      cover: "https://m.media-amazon.com/images/I/4126yKKWJyL.jpg",
      postedBy: "0001",
      postedDate: "01/01/2023",
      theme: ["Hormones"],
      pages: 202,
      comments: ["awesome", "well written"]
    },
    "0988JG89789Jtyh" : {
      id: "0988JG89789Jtyh",
      title : "Period repair manual",
      author : "Lara Briden",
      votes : 81,
      cover: "https://m.media-amazon.com/images/I/51pVfi-MDML.jpg",
      postedBy: "0001",
      postedDate: "01/01/2023",
      theme: ["Insuline", "Hormones"],
      pages: 345,
      comments: ["very insightful", "could be better", "dissapointed"]
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
            votes : 0,
            cover: cover,
            postedBy: postedBy,
            postedDate: postedDate,
            theme: theme,
            pages: pages,
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

 