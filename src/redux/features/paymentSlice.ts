import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Payment} from "../../common/interfaces";

interface PaymentState {
    payments: Payment[];
    loading: boolean;
    error: string | null;
}

const initialState: PaymentState = {
    payments: [],
    loading: false,
    error: null
};

const paymentSlice = createSlice({
    name: "payments",
    initialState,
    reducers: {
        fetchPaymentsStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchPaymentsSuccess(state, action: PayloadAction<Payment[]>) {
            state.payments = action.payload;
            state.loading = false;
        },
        fetchPaymentsFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        createPaymentStart(state) {
            state.loading = true;
            state.error = null;
        },
        createPaymentSuccess(state, action: PayloadAction<Payment>) {
            state.payments.push(action.payload);
            state.loading = false;
        },
        createPaymentFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const {
    fetchPaymentsStart,
    fetchPaymentsSuccess,
    fetchPaymentsFailure,
    createPaymentStart,
    createPaymentSuccess,
    createPaymentFailure
} = paymentSlice.actions;

export default paymentSlice.reducer;
