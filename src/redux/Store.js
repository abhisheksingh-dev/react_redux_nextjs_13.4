import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './CartSlice'
import favReducer from './FavSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    fav: favReducer,
  },
})

export default store
