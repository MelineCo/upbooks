import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    comments: {}
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState: initialState,
    reducers: {
      addComment: (state, action) => {
        const { id, content, author, date } = action.payload;
        state.comments[id] = {
            id: id,
            content : content,
            author : author,
            date : date
        }
      }
    }
  })

  
  export const { addComment } = commentsSlice.actions
  export default commentsSlice.reducer