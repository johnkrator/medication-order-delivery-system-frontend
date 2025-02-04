import React, {useState} from "react";
import {CreateOrderDto} from "../common/interfaces"; // Ensure this import exists
import {useCreateOrder} from "../redux/features/orderQueries.ts";

const CreateOrderForm: React.FC = () => {
    const [orderData, setOrderData] = useState<CreateOrderDto>({
        userId: "",
        medicationIds: [], // Explicitly typed as string[]
        deliveryAddress: "",
        specialInstructions: "",
    });

    const createOrderMutation = useCreateOrder();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        createOrderMutation.mutate({
            ...orderData,
            medicationIds: orderData.medicationIds
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="User ID"
                value={orderData.userId}
                onChange={(e) => setOrderData({...orderData, userId: e.target.value})}
            />
            <input
                type="text"
                placeholder="Medication IDs (comma separated)"
                value={orderData.medicationIds.join(",")}
                onChange={(e) =>
                    setOrderData({
                        ...orderData,
                        medicationIds: e.target.value.trim()
                            ? e.target.value.split(",").map(id => id.trim())
                            : []
                    })
                }
            />
            <input
                type="text"
                placeholder="Delivery Address"
                value={orderData.deliveryAddress || ""}
                onChange={(e) =>
                    setOrderData({...orderData, deliveryAddress: e.target.value})
                }
            />
            <input
                type="text"
                placeholder="Special Instructions"
                value={orderData.specialInstructions || ""}
                onChange={(e) =>
                    setOrderData({...orderData, specialInstructions: e.target.value})
                }
            />
            <button type="submit">Create Order</button>
        </form>
    );
};

export default CreateOrderForm;
