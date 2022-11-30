import { configureStore } from "@reduxjs/toolkit"
import sroteSlice from "../reducers/storeReducer/storeSlice"
import cartSlice from "../reducers/cartReducer/cartSlice"

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    store: sroteSlice,

  },
})
