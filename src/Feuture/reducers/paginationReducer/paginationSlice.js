import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  currentPage: 1,
  dataPerPage: 8,
}

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    handleNext: (state) => {
      state.currentPage += 1
    },
    handleBack: (state) => {
      state.currentPage -= 1
    },
    handlePageinate: (state, action) => {
      state.currentPage = action.payload
    },
    changeDispalyData: (state, action) => {
      console.log(action.payload)
      state.dataPerPage = action.payload
    },
  },
})

export const { handleBack, handleNext, handlePageinate, changeDispalyData } =
  paginationSlice.actions

export default paginationSlice.reducer
