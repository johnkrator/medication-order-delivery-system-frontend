import {createAsyncThunk} from "@reduxjs/toolkit";
import {paymentApi} from "../APIs/paymentApi.ts";
import {
    fetchPaymentsStart,
    fetchPaymentsSuccess,
    fetchPaymentsFailure,
    createPaymentStart,
    createPaymentSuccess,
    createPaymentFailure
} from "./paymentSlice.ts";
import {CreatePaymentDto} from "../../../common/interfaces.ts";

const getErrorMessage = (error: unknown): string => {
    if (error instanceof Error) return error.message;
    return String(error);
};

export const fetchPayments = createAsyncThunk(
    "payment/fetchPayments",
    async (_, {dispatch}) => {
        try {
            dispatch(fetchPaymentsStart());
            const payments = await paymentApi.fetchPayments();
            dispatch(fetchPaymentsSuccess(payments));
            return payments;
        } catch (error) {
            const errorMessage = getErrorMessage(error);
            dispatch(fetchPaymentsFailure(errorMessage));
            throw error;
        }
    }
);

export const createPayment = createAsyncThunk(
    "payment/createPayment",
    async (paymentData: CreatePaymentDto, {dispatch}) => {
        try {
            dispatch(createPaymentStart());
            const newPayment = await paymentApi.createPayment(paymentData);
            dispatch(createPaymentSuccess(newPayment));
            return newPayment;
        } catch (error) {
            const errorMessage = getErrorMessage(error);
            dispatch(createPaymentFailure(errorMessage));
            throw error;
        }
    }
);
