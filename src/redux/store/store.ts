import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../features/userSlice.ts";
import OrderReducer from "../features/orderSlice.ts";
import MedicationReducer from "../features/medicationSlice.ts";
import PaymentReducer from "../features/paymentSlice.ts";
import DeliveryPartnerReducer from "../features/deliveryPartnerSlice.ts";

const store = configureStore({
    reducer: {
        user: userReducer,
        order: OrderReducer,
        medication: MedicationReducer,
        payments: PaymentReducer,
        deliveryPartner: DeliveryPartnerReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
