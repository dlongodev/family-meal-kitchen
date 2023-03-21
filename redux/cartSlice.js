import { createSlice } from "@reduxjs/toolkit";
import cookie from "js-cookie"

const saveCartToCookies = (state) => {
    cookie.set("cart", JSON.stringify({
        menuItems: state.menuItems,
        quantity: state.quantity,
        total:  state.total,
    })); 
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    menuItems: [],
    quantity: 0,
    total: 0,
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
      saveCartToCookies(state)
    },
    reset: (state) => {
      state.menuItems = [];
      state.quantity = 0;
      state.total = 0;
      saveCartToCookies(state)
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
      saveCartToCookies(state)
    },
    removeMenuItem: (state, action) => {
      state.quantity -= action.payload.quantity;
      state.total -= action.payload.total;
      state.menuItems.splice(action.payload.index, 1);
      saveCartToCookies(state)
    },
    setCartInitialState: (state, action) => {
        console.log({ACTION: action.payload})
        state.menuItems = action.payload.menuItems
        state.quantity = action.payload.quantity
        state.total = action.payload.total
    }
  },
});

export const { addMenuItem, reset, removeMenuItem, decreaseQuantity, setCartInitialState } =
  cartSlice.actions;
export default cartSlice.reducer;
