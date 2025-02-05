import axios from "axios";
import {CreateMedicationDto} from "../../../common/interfaces.ts";

const API_URL = import.meta.env.VITE_API_URL || "https://pharmatradeapi.vercel.app/api";

export const medicationApi = {
    fetchMedications: async () => {
        const response = await axios.get(`${API_URL}/medication`);
        return response.data;
    },

    createMedication: async (medicationData: CreateMedicationDto) => {
        const response = await axios.post(`${API_URL}/medication`, medicationData);
        return response.data;
    },

    updateMedication: async (id: string, medicationData: Partial<CreateMedicationDto>) => {
        const response = await axios.patch(`${API_URL}/medication/${id}`, medicationData);
        return response.data;
    },

    deleteMedication: async (id: string) => {
        const response = await axios.delete(`${API_URL}/medication/${id}`);
        return response.data;
    }
};
