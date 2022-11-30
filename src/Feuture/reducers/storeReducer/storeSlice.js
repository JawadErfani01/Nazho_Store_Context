import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { storeService } from "./storeService"

const initialState = {
  list: [],
  number: 0,
  error: false,
  loading: false,
  message: "",
  searchValue: "",
}

export const getData = createAsyncThunk("/getData", async (thankApi) => {
  try {
    const response=storeService.getProducts()
    return response
  } catch (err) {
    if (!err.response) {
      throw err
    }
    return thankApi.rejectWithValue(err.response.data)
  }
})

export const getCategory = createAsyncThunk("/getCategory", async (category, thankApi) => {

  try {
    if (category === 'All') {
      const response = storeService.getProducts()
      return response
    } else {
      const response = storeService.getCategory(category)
      return response
    }

  } catch (err) {
    if (!err.response) {


      throw err

    }
    return thankApi.rejectWithValue(err.response.data)
  }
})


export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    newList: (state, action) => {
      state.list = action.payload
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.list = action.payload
        state.loading = false
      })
      .addCase(getData.rejected, (state, action) => {
        state.message = action.payload
        state.error = true
        state.loading = false
      })
      .addCase(getCategory.pending, (state) => {
        state.loading = true

      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.list = action.payload
        state.loading = false
      })
      .addCase(getCategory.rejected, (state, action) => {
        state.message = action.payload
        state.error = true
        state.loading = false
      })
  },
})

export const {
  incrementPrice,
  decrementPrice,
  newList,
  incrementNOrder,

} = storeSlice.actions

export default storeSlice.reducer
