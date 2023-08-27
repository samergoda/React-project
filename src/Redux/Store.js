import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./Counter";

let store = configureStore({
    reducer:{
        counter:counterReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),

})
export default store