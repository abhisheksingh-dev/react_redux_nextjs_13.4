'use client'

import { createSlice } from '@reduxjs/toolkit'

const FavSlice = createSlice({
  name: 'FavSlice',
  initialState: [],
  reducers: {
    addFav(state, action) {
      state.push(action.payload)
    },
    removeFav(state, action) {
      return state.filter((item) => item.id !== action.payload)
    },
  },
})

export const { addFav, removeFav } = FavSlice.actions
export default FavSlice.reducer
