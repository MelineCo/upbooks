import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    themes: {}
}

const usersSlice = createSlice({
    name: 'themes',
    initialState: initialState,
    reducers: {
      addTheme: (state, action) => {
        const { id, name } = action.payload;
        state.themes[id] = {
            id: id,
            name: name,
            books: []
        }
      }
    }
  })

  
  export const { addTheme } = themesSlice.actions
  export default themesSlice.reducer