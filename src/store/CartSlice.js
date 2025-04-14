import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    // Here reducer contains to things (In key : value pair)                         1) action, 2)reducer function
    addItems: (state, action) => {
     state.cartItems.push(action.payload)
    },
    removeItems: (state, action) => {
     state.cartItems.pop()
    },
    clearItems: (state, action) => {
     state.cartItems.length = 0;
    },
  },
});

export const {addItems,removeItems,clearItems} = cartSlice.actions
export default cartSlice.reducer;