import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.amount = 0;
      state.cartItems = [];
    },
    clearItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    addItem: (state, action) => {
      // オブジェクト直下の直接代入は大丈夫
      // state.amount = 0;
      // // オブジェクト直下の加算代入も大丈夫
      // state.amount += 1;
      const item = state.cartItems.find((item) => item.id === action.payload);
      item.amount += 1;
    },
    substractItem: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item.amount > 1) {
        item.amount -= 1;
        console.log(item);
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
      }
    },
    totalCalculate: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});
export const { clearCart, clearItem, addItem, substractItem, totalCalculate } =
  cartSlice.actions;
export default cartSlice.reducer;
