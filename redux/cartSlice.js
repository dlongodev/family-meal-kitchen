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
            if (!state.menuItems?.some(item => item.title === action.payload.title)) {
                state.menuItems.push(action.payload);
                state.quantity += 1;
                state.total += action.payload.price * action.payload.quantity;
            } else {
                state.menuItems.map((item) => {
                    if (item.title === action.payload.title) {
                        item.quantity += 1
                        state.quantity += 1
                        item.total += action.payload.price * action.payload.quantity;
                        state.total += action.payload.price * action.payload.quantity;
                    }
                })
            }
        },
        reset: (state) => {
            state.menuItems = [];
            state.quantity = 0;
            state.total = 0;
        },
        removeMenuItem: (state, action) => {
            state.quantity -= action.payload.quantity;
            state.total -= action.payload.price * action.payload.quantity;
            state.menuItems.pop(action.payload);
        },
    },
});

export const { addMenuItem, reset, removeMenuItem } = cartSlice.actions;
export default cartSlice.reducer;