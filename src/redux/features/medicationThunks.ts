import {createAsyncThunk} from "@reduxjs/toolkit";
import {medicationApi} from "./APIs/medicationApi";
import {
    fetchMedicationsStart,
    fetchMedicationsSuccess,
    fetchMedicationsFailure,
    createMedicationStart,
    createMedicationSuccess,
    createMedicationFailure
} from "./medicationSlice";
import {CreateMedicationDto} from "../../common/interfaces";

const getErrorMessage = (error: unknown): string => {
    if (error instanceof Error) return error.message;
    return String(error);
};

export const fetchMedications = createAsyncThunk(
    "medication/fetchMedications",
    async (_, {dispatch}) => {
        try {
            dispatch(fetchMedicationsStart());
            const medications = await medicationApi.fetchMedications();
            dispatch(fetchMedicationsSuccess(medications));
            return medications;
        } catch (error) {
            const errorMessage = getErrorMessage(error);
            dispatch(fetchMedicationsFailure(errorMessage));
            throw error;
        }
    }
);

export const createMedication = createAsyncThunk(
    "medication/createMedication",
    async (medicationData: CreateMedicationDto, {dispatch}) => {
        try {
            dispatch(createMedicationStart());
            const newMedication = await medicationApi.createMedication(medicationData);
            dispatch(createMedicationSuccess(newMedication));
            return newMedication;
        } catch (error) {
            const errorMessage = getErrorMessage(error);
            dispatch(createMedicationFailure(errorMessage));
            throw error;
        }
    }
);
