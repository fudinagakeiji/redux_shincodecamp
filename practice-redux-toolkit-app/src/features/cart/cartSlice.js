import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
};
// ここは下でexportしてるからいらない
// export const cartSlice = createSlice({
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      // こういう書き方でもいけるけど、コメントアウトしてない方の直接ミューテートしてるのが推奨。
      // return { amount: 0, cartItems: [], total: 0 };
      state.amount = 0;
      state.cartItems = [];
      state.total = 0;
    },
    clearItem: (state, action) => {
      const itemId = action.payload; //で一回変数にした方がわかりやすい。action名はremoveItem。
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    // action名increse
    addItem: (state, action) => {
      // オブジェクト直下の直接代入は大丈夫
      // state.amount = 0;
      // // オブジェクト直下の加算代入も大丈夫
      // state.amount += 1;
      // item→cartItemのがいい
      const item = state.cartItems.find((item) => item.id === action.payload);
      item.amount += 1;
    },
    // substractItem→decrease
    substractItem: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item.amount > 1) {
        item.amount -= 1;
        console.log(item);
        // こっちの出しわけが正解にない？
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
      }
    },
    // totalCalculate→calculateTotals
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
