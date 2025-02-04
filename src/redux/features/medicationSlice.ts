import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Medication} from "../../common/interfaces";

interface MedicationState {
    medications: Medication[];
    loading: boolean;
    error: string | null;
}

const initialState: MedicationState = {
    medications: [],
    loading: false,
    error: null
};

const medicationSlice = createSlice({
    name: "medications",
    initialState,
    reducers: {
        fetchMedicationsStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchMedicationsSuccess(state, action: PayloadAction<Medication[]>) {
            state.medications = action.payload;
            state.loading = false;
        },
        fetchMedicationsFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        createMedicationStart(state) {
            state.loading = true;
            state.error = null;
        },
        createMedicationSuccess(state, action: PayloadAction<Medication>) {
            state.medications.push(action.payload);
            state.loading = false;
        },
        createMedicationFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const {
    fetchMedicationsStart,
    fetchMedicationsSuccess,
    fetchMedicationsFailure,
    createMedicationStart,
    createMedicationSuccess,
    createMedicationFailure
} = medicationSlice.actions;

export default medicationSlice.reducer;
