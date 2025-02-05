import axios from "axios";
import {CreateDeliveryPartnerDto} from "../../../common/interfaces.ts";

const API_URL = import.meta.env.VITE_API_URL || "https://pharmatradeapi.vercel.app/api";

export const deliveryPartnerApi = {
    fetchDeliveryPartners: async () => {
        const response = await axios.get(`${API_URL}/delivery-partner`);
        return response.data;
    },

    createDeliveryPartner: async (deliveryPartnerData: CreateDeliveryPartnerDto) => {
        const response = await axios.post(`${API_URL}/delivery-partner`, deliveryPartnerData);
        return response.data;
    },

    updateDeliveryPartner: async (id: string, deliveryPartnerData: Partial<CreateDeliveryPartnerDto>) => {
        const response = await axios.patch(`${API_URL}/delivery-partner/${id}`, deliveryPartnerData);
        return response.data;
    },

    deleteDeliveryPartner: async (id: string) => {
        const response = await axios.delete(`${API_URL}/delivery-partner/${id}`);
        return response.data;
    }
};
