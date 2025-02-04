import {createAsyncThunk} from "@reduxjs/toolkit";
import {deliveryPartnerApi} from "./APIs/deliveryPartnerApi";
import {
    fetchDeliveryPartnersStart,
    fetchDeliveryPartnersSuccess,
    fetchDeliveryPartnersFailure,
    createDeliveryPartnerStart,
    createDeliveryPartnerSuccess,
    createDeliveryPartnerFailure
} from "./deliveryPartnerSlice";
import {CreateDeliveryPartnerDto} from "../../common/interfaces";

const getErrorMessage = (error: unknown): string => {
    if (error instanceof Error) return error.message;
    return String(error);
};

export const fetchDeliveryPartners = createAsyncThunk(
    "deliveryPartner/fetchDeliveryPartners",
    async (_, {dispatch}) => {
        try {
            dispatch(fetchDeliveryPartnersStart());
            const deliveryPartners = await deliveryPartnerApi.fetchDeliveryPartners();
            dispatch(fetchDeliveryPartnersSuccess(deliveryPartners));
            return deliveryPartners;
        } catch (error) {
            const errorMessage = getErrorMessage(error);
            dispatch(fetchDeliveryPartnersFailure(errorMessage));
            throw error;
        }
    }
);

export const createDeliveryPartner = createAsyncThunk(
    "deliveryPartner/createDeliveryPartner",
    async (deliveryPartnerData: CreateDeliveryPartnerDto, {dispatch}) => {
        try {
            dispatch(createDeliveryPartnerStart());
            const newDeliveryPartner = await deliveryPartnerApi.createDeliveryPartner(deliveryPartnerData);
            dispatch(createDeliveryPartnerSuccess(newDeliveryPartner));
            return newDeliveryPartner;
        } catch (error) {
            const errorMessage = getErrorMessage(error);
            dispatch(createDeliveryPartnerFailure(errorMessage));
            throw error;
        }
    }
);
