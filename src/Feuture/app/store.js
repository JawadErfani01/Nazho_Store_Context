import { configureStore } from "@reduxjs/toolkit"
import sroteSlice from "../reducers/storeReducer/storeSlice"


export const store = configureStore({
  reducer: {
 
    store: sroteSlice,

  },
})
