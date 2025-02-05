import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {DeliveryPartner} from "../../../common/interfaces.ts";

interface DeliveryPartnerState {
    deliveryPartners: DeliveryPartner[];
    loading: boolean;
    error: string | null;
}

const initialState: DeliveryPartnerState = {
    deliveryPartners: [],
    loading: false,
    error: null
};

const deliveryPartnerSlice = createSlice({
    name: "deliveryPartners",
    initialState,
    reducers: {
        fetchDeliveryPartnersStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchDeliveryPartnersSuccess(state, action: PayloadAction<DeliveryPartner[]>) {
            state.deliveryPartners = action.payload;
            state.loading = false;
        },
        fetchDeliveryPartnersFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        createDeliveryPartnerStart(state) {
            state.loading = true;
            state.error = null;
        },
        createDeliveryPartnerSuccess(state, action: PayloadAction<DeliveryPartner>) {
            state.deliveryPartners.push(action.payload);
            state.loading = false;
        },
        createDeliveryPartnerFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const {
    fetchDeliveryPartnersStart,
    fetchDeliveryPartnersSuccess,
    fetchDeliveryPartnersFailure,
    createDeliveryPartnerStart,
    createDeliveryPartnerSuccess,
    createDeliveryPartnerFailure
} = deliveryPartnerSlice.actions;

export default deliveryPartnerSlice.reducer;
