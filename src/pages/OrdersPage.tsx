import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CreateOrderDto} from "../common/interfaces";
import {AppDispatch, RootState} from "../redux/store/store.ts";
import {createOrder, deleteOrder, fetchOrders, updateOrder} from "../redux/features/order/orderThunks.ts";

const OrdersPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {orders, loading, error} = useSelector((state: RootState) => state.order);

    // State for creating/editing order
    const [newOrder, setNewOrder] = useState<Partial<CreateOrderDto>>({});
    const [editingOrderId, setEditingOrderId] = useState<string | null>(null);

    // Fetch orders on component mount
    useEffect(() => {
        dispatch(fetchOrders());
    }, [dispatch]);

    // Handle order creation
    const handleCreateOrder = () => {
        if (newOrder) {
            dispatch(createOrder(newOrder as CreateOrderDto));
            setNewOrder({}); // Reset form
        }
    };

    // Handle order update
    const handleUpdateOrder = () => {
        if (editingOrderId && newOrder) {
            dispatch(updateOrder({
                id: editingOrderId,
                orderData: newOrder
            }));
            setEditingOrderId(null);
            setNewOrder({});
        }
    };

    // Handle order deletion
    const handleDeleteOrder = (id: string) => {
        dispatch(deleteOrder(id));
    };

    // Render loading and error states
    if (loading) return <div>Loading orders...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="overflow-x-auto p-4">
            {/* Order Creation/Editing Form */}
            <div className="mb-4">
                <input
                    placeholder="Delivery Address"
                    value={newOrder.deliveryAddress || ""}
                    onChange={(e) => setNewOrder({
                        ...newOrder,
                        deliveryAddress: e.target.value
                    })}
                />
                {/* Add more input fields as needed */}
                {editingOrderId ? (
                    <button onClick={handleUpdateOrder}>Update Order</button>
                ) : (
                    <button onClick={handleCreateOrder}>Create Order</button>
                )}
            </div>

            {/* Orders Table */}
            <table className="w-full min-w-[600px]">
                <thead>
                <tr className="text-gray-500 text-sm border-b border-gray-800">
                    <th className="text-left pb-4">Order ID</th>
                    <th className="text-left pb-4">Total</th>
                    <th className="text-left pb-4">Status</th>
                    <th className="text-left pb-4">Actions</th>
                </tr>
                </thead>
                <tbody>
                {orders.map((order) => (
                    <tr key={order.id} className="border-b border-gray-800">
                        <td className="py-4">{order.id}</td>
                        <td>{order.total}</td>
                        <td>
                                <span
                                    className={`px-3 py-1 rounded-full text-sm ${
                                        order.status === "Shipped"
                                            ? "bg-blue-900/20 text-blue-500"
                                            : order.status === "Processing"
                                                ? "bg-yellow-900/20 text-yellow-500"
                                                : "bg-green-900/20 text-green-500"
                                    }`}
                                >
                                    {order.status}
                                </span>
                        </td>
                        <td>
                            <button
                                onClick={() => {
                                    setEditingOrderId(order.id);
                                    setNewOrder({
                                        deliveryAddress: order.deliveryAddress
                                        // Add other fields as needed
                                    });
                                }}
                                className="mr-2 text-blue-500"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDeleteOrder(order.id)}
                                className="text-red-500"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrdersPage;
