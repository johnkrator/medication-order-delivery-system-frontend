import {useMutation, useQueryClient} from "react-query";
import {CreateOrderDto} from "../../../common/interfaces.ts";
import {orderApi} from "../APIs/orderApi.ts";

export const useCreateOrder = () => {
    const queryClient = useQueryClient();

    return useMutation(
        (orderData: CreateOrderDto) => orderApi.createOrder(orderData),
        {
            onSuccess: () => {
                // Invalidate and refetch orders
                queryClient.invalidateQueries("orders");
            },
            onError: (error) => {
                // Handle error
                console.error("Order creation failed", error);
            }
        }
    );
};
