import { createSlice } from '@reduxjs/toolkit'

// const BISAC = [
//   "Biography",
//   "Body, Mind & Spirit",
//   "Business & Economics",
//   "Comics & Graphic novel",
//   "Cooking",
//   "Crafts & Hobbies",
//   "Design",
//   "Drama",
//   "Education",
//   "Family & Relationships",
//   "Fiction",
//   "Foreign language study",
//   "Health & Fitness",
//   "History",
//   "Law",
//   "Mathematics",
//   "Medical",
//   "Music",
//   "Nature",
//   "Science",
//   "Self-help",
//   "Sports & Recreation",
//   "Technology & engineering",
//   "Travel"
// ]

const initialState = {
    categories: {
     1: {
        name: "Biography",
        icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      },
      2: {
        name: "Cooking",
        icon: "M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z"
      }
    }
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: initialState,
    reducers: {
      addCategory: (state, action) => {
        const { name, icon } = action.payload;
        state.categories[name] = {
            name: name,
            icon: icon
        }
      }
    }
  })

  
  export const { addCategory } = categoriesSlice.actions
  export default categoriesSlice.reducer
  export const selectCategories = (state) => state.categories.categories;