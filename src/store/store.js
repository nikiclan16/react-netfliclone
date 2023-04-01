import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { priceSlice } from "./netflix/priceSlice";


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        price: priceSlice.reducer
        // netflix: netflix.reducer,
    },
})