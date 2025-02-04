import {createAsyncThunk} from "@reduxjs/toolkit";
import {
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
} from "./orderSlice";
import {orderApi} from "./APIs/orderApi.ts";
import {CreateOrderDto} from "../../common/interfaces.ts";

// Helper function to extract error message
const getErrorMessage = (error: unknown): string => {
    if (error instanceof Error) return error.message;
    return String(error);
};

export const fetchOrders = createAsyncThunk(
    "order/fetchOrders",
    async (_, {dispatch}) => {
        try {
            dispatch(fetchOrdersStart());
            const orders = await orderApi.fetchOrders();
            dispatch(fetchOrdersSuccess(orders));
            return orders;
        } catch (error) {
            const errorMessage = getErrorMessage(error);
            dispatch(fetchOrdersFailure(errorMessage));
            throw error;
        }
    }
);

export const createOrder = createAsyncThunk(
    "order/createOrder",
    async (orderData: CreateOrderDto, {dispatch}) => {
        try {
            dispatch(addOrderStart());
            const newOrder = await orderApi.createOrder(orderData);
            dispatch(addOrderSuccess(newOrder));
            return newOrder;
        } catch (error) {
            const errorMessage = getErrorMessage(error);
            dispatch(addOrderFailure(errorMessage));
            throw error;
        }
    }
);

export const updateOrder = createAsyncThunk(
    "order/updateOrder",
    async ({id, orderData}: { id: string; orderData: Partial<CreateOrderDto> }, {dispatch}) => {
        try {
            dispatch(updateOrderStart());
            const updatedOrder = await orderApi.updateOrder(id, orderData);
            dispatch(updateOrderSuccess(updatedOrder));
            return updatedOrder;
        } catch (error) {
            const errorMessage = getErrorMessage(error);
            dispatch(updateOrderFailure(errorMessage));
            throw error;
        }
    }
);

export const deleteOrder = createAsyncThunk(
    "order/deleteOrder",
    async (id: string, {dispatch}) => {
        try {
            dispatch(deleteOrderStart());
            await orderApi.deleteOrder(id);
            dispatch(deleteOrderSuccess(id));
            return id;
        } catch (error) {
            const errorMessage = getErrorMessage(error);
            dispatch(deleteOrderFailure(errorMessage));
            throw error;
        }
    }
);
