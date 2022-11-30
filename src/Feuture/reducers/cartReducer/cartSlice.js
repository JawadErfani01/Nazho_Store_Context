import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
const initialState = {
  items: [],
  added: false,
  NOrder: 0,
  total: 0,
  change: false,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      )
      if (index >= 0) {
        state.items[index].quantitiy+=1
      } else {
        state.items.push({
          ...action.payload,
          quantitiy: 1,
        })
        state.NOrder += 1
        console.log(action.payload);
        window.localStorage.setItem("product",action.payload)
      }
    },
    increment: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      )
      if (state.items[index].quantitiy >= 1) {
        state.items[index].quantitiy += 1
        toast.info(`You increased ${action.payload.title} `)
        state.total += action.payload.price
      }
    },
    decrement: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      )

      if (state.items[index].quantitiy > 1) {
        state.items[index].quantitiy -= 1
        state.total -= action.payload.price
        toast.error(`You Decreased ${action.payload.title}`)
      }
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
      state.total -= action.payload.price * action.payload.quantitiy
      state.NOrder -= 1
      toast(`You Delete ${action.payload.title} from cart`)
    },
    clearCart: (state, action) => {
      state.items = []
      state.total = 0
      state.NOrder = 0
    },
    getTotalPrice: (state, action) => {
      state.total += action.payload.price
    },
    changeMony: (state) => {
      state.change = !state.change
    },
  },
})

export const {
  addToCart,
  increment,
  changeMony,
  decrement,
  deleteItem,
  getTotalPrice,
} = cartSlice.actions
export default cartSlice.reducer
