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
    },
});

export const { addMenuItem, reset } = cartSlice.actions;
export default cartSlice.reducer;