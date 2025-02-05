import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../features/userSlice.ts";
import OrderReducer from "../features/order/orderSlice.ts";
import MedicationReducer from "../features/medication/medicationSlice.ts";
import PaymentReducer from "../features/payment/paymentSlice.ts";
import DeliveryPartnerReducer from "../features/delivery-partner/deliveryPartnerSlice.ts";

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
