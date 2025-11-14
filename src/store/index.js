import { configureStore } from '@reduxjs/toolkit'
import listReducer from "./List";
import detailsReducer from "./Details";
import cartReducer from "./Cart";

export const store = configureStore({
    reducer: {
        list: listReducer,
        details: detailsReducer,
        cart: cartReducer
    },
})

export default store