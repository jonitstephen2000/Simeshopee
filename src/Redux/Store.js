import UserReducer from "./UserSlice"

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Components/features/cartSlice";
const store =configureStore({
    reducer:{
        user:UserReducer,
        allCart: cartReducer,
    }
})

export default store;