import { createSlice } from "@reduxjs/toolkit";

const items =
  typeof window !== "undefined" && localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];
const totalQuantity =
  typeof window !== "undefined" &&
  localStorage.getItem("totalQuantity") !== null
    ? JSON.parse(localStorage.getItem("totalQuantity"))
    : 0;
const totalAmount =
  typeof window !== "undefined" && localStorage.getItem("totalAmount") !== null
    ? JSON.parse(localStorage.getItem("totalAmount"))
    : 0;

const updateCartStorage = (item, totalQty, totalAmt) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cartItems", JSON.stringify(item));
    localStorage.setItem("totalQuantity", JSON.stringify(totalQty));
    localStorage.setItem("totalAmount", JSON.stringify(totalAmt));
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    menuItems: items,
    quantity: totalQuantity,
    total: totalAmount,
  },
  reducers: {
    addMenuItem: (state, action) => {
      if (!state.menuItems?.some((item) => item._id === action.payload._id)) {
        state.menuItems.push(action.payload);
        state.quantity += action.payload.quantity;
        state.total += action.payload.price * action.payload.quantity;
      } else {
        state.menuItems.map((item) => {
          if (item._id === action.payload._id) {
            //update individual quantity
            item.quantity += action.payload.quantity;
            item.total += action.payload.price * action.payload.quantity;
            //update cart total
            state.quantity += action.payload.quantity;
            state.total += action.payload.price * action.payload.quantity;
          }
        });
      }
      updateCartStorage(
        state.menuItems.map((item) => item),
        state.quantity,
        state.total
      );
    },
    reset: (state) => {
      state.menuItems = [];
      state.quantity = 0;
      state.total = 0;
      updateCartStorage([], 0, 0);
    },
    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      console.log({ itemId });
      const existingItem = state.menuItems.find((item) => item._id === itemId);
      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        state.menuItems = state.menuItems.filter((item) => item._id !== itemId);
      } else {
        existingItem.quantity--;
        existingItem.total =
          Number(existingItem.total) - Number(existingItem.price);
      }

      state.total = state.menuItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      updateCartStorage(
        state.menuItems.map((item) => item),
        state.quantity,
        state.total
      );
    },
    removeMenuItem: (state, action) => {
      state.quantity -= action.payload.quantity;
      state.total -= action.payload.total;
      state.menuItems.splice(action.payload.index, 1);
      updateCartStorage(
        state.menuItems.map((item) => item),
        state.quantity,
        state.total
      );
      console.log(action.payload, state.total);
    },
  },
});

export const { addMenuItem, reset, removeMenuItem, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
