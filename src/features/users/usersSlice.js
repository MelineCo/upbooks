import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: {}
}

const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
      addUser: (state, action) => {
        const { id, name, surname } = action.payload;
        state.users[id] = {
            id: id,
            name : name,
            surname : surname,
            addedBooks : [],
            addedComments: [],
            pile: []
        }
      }
    }
  })

  
  export const { addUser } = usersSlice.actions
  export default usersSlice.reducer