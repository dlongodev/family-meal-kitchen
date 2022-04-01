import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        menuItems: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addMenuItem: (state, action) => {
            state.menuItems.push(action.payload);
            state.quantity += 1;
            state.total += action.payload.price * action.payload.quantity;
        },
        reset: (state) => {
            state.menuItems = [];
            state.quantity = 0;
            state.total = 0;
        },
        removeMenuItem: (state, action) => {
            state.menuItems.pop(action.payload);
            state.quantity -= 1;
            state.total -= action.payload.price * action.payload.quantity;
        },
    },
});

export const { addMenuItem, reset, removeMenuItem } = cartSlice.actions;
export default cartSlice.reducer;