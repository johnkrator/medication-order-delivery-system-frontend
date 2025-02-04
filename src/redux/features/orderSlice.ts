import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Order} from "../../common/interfaces.ts";

interface OrderState {
    orders: Order[];
    loading: boolean;
    error: string | null;
}

const initialState: OrderState = {
    orders: [],
    loading: false,
    error: null
};

const orderSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        fetchOrdersStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchOrdersSuccess(state, action: PayloadAction<Order[]>) {
            state.orders = action.payload;
            state.loading = false;
        },
        fetchOrdersFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        addOrderStart(state) {
            state.loading = true;
            state.error = null;
        },
        addOrderSuccess(state, action: PayloadAction<Order>) {
            state.orders.push(action.payload);
            state.loading = false;
        },
        addOrderFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        updateOrderStart(state) {
            state.loading = true;
            state.error = null;
        },
        updateOrderSuccess(state, action: PayloadAction<Order>) {
            const index = state.orders.findIndex(order => order.id === action.payload.id);
            if (index !== -1) {
                state.orders[index] = action.payload;
            }
            state.loading = false;
        },
        updateOrderFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        deleteOrderStart(state) {
            state.loading = true;
            state.error = null;
        },
        deleteOrderSuccess(state, action: PayloadAction<string>) {
            state.orders = state.orders.filter(order => order.id !== action.payload);
            state.loading = false;
        },
        deleteOrderFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const {
    fetchOrdersStart,
    fetchOrdersSuccess,
    fetchOrdersFailure,
    addOrderStart,
    addOrderSuccess,
    addOrderFailure,
    updateOrderStart,
    updateOrderSuccess,
    updateOrderFailure,
    deleteOrderStart,
    deleteOrderSuccess,
    deleteOrderFailure
} = orderSlice.actions;

export default orderSlice.reducer;
