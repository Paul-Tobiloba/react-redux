import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: { cartIsVisible: false, notification: null },
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        },
        showNotification(state, action) {
            state.notification = {
                message: action.payload.message,
                status: action.payload.status,
                title: action.payload.title,
            }
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice;
