import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
    name: 'search',
    initialState: { title: '' },
    reducers: {
        modifySearch: (state, action) => {
            state.title = action.payload;
        }
    }
})


export const { modifySearch } = searchSlice.actions
export default searchSlice.reducer
export const selectSearch = (state) => state.search.title