import axios from "axios";
import {CreatePaymentDto, VerifyPaymentDto} from "../../../common/interfaces.ts";

// const API_URL = "http://localhost:3000/api";
const API_URL = "https://pharmatradeapi.vercel.app/api";

export const paymentApi = {
    fetchPayments: async () => {
        const response = await axios.get(`${API_URL}/payment`);
        return response.data;
    },

    createPayment: async (paymentData: CreatePaymentDto) => {
        const response = await axios.post(`${API_URL}/payment`, paymentData);
        return response.data;
    },

    verifyPayment: async (verifyData: VerifyPaymentDto) => {
        const response = await axios.post(`${API_URL}/payment/verify`, verifyData);
        return response.data;
    }
};
