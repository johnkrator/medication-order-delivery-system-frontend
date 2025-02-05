import {useMutation, useQueryClient} from "react-query";
import {CreatePaymentDto} from "../../../common/interfaces.ts";
import {paymentApi} from "../APIs/paymentApi.ts";

export const useCreatePayment = () => {
    const queryClient = useQueryClient();

    return useMutation(
        (paymentData: CreatePaymentDto) => paymentApi.createPayment(paymentData),
        {
            onSuccess: () => {
                queryClient.invalidateQueries("payments");
            },
            onError: (error) => {
                console.error("Payment creation failed", error);
            }
        }
    );
};
