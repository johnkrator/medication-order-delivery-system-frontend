import {useMutation, useQueryClient} from "react-query";
import {CreateDeliveryPartnerDto} from "../../common/interfaces";
import {deliveryPartnerApi} from "./APIs/deliveryPartnerApi";

export const useCreateDeliveryPartner = () => {
    const queryClient = useQueryClient();

    return useMutation(
        (deliveryPartnerData: CreateDeliveryPartnerDto) => deliveryPartnerApi.createDeliveryPartner(deliveryPartnerData),
        {
            onSuccess: () => {
                queryClient.invalidateQueries("deliveryPartners");
            },
            onError: (error) => {
                console.error("Delivery partner creation failed", error);
            }
        }
    );
};
