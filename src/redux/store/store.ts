import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../features/userSlice.ts";
import OrderReducer from "../features/orderSlice.ts";

const store = configureStore({
    reducer: {
        user: userReducer,
        order: OrderReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
