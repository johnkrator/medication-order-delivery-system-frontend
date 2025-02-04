import axios from "axios";
import {CreateOrderDto} from "../../../common/interfaces.ts";

const API_URL = "http://localhost:3000/api";

export const orderApi = {
    fetchOrders: async () => {
        const response = await axios.get(`${API_URL}/order`);
        return response.data;
    },

    createOrder: async (orderData: CreateOrderDto) => {
        const response = await axios.post(`${API_URL}/order`, orderData);
        return response.data;
    },

    updateOrder: async (id: string, orderData: Partial<CreateOrderDto>) => {
        const response = await axios.patch(`${API_URL}/order/${id}`, orderData);
        return response.data;
    },

    deleteOrder: async (id: string) => {
        const response = await axios.delete(`${API_URL}/order/${id}`);
        return response.data;
    }
};
