
import { cartSlice } from "./Slices/cartSlice";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({

    reducer: {
        cart: cartSlice.reducer
    },
})