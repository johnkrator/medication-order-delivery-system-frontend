import {FC} from "react";

interface Order {
    id: string;
    date: string;
    customer: string;
    total: string;
    status: "Shipped" | "Processing" | "Delivered";
}

const OrdersPage: FC = () => {
    const orderData: Order[] = [
        {
            id: "ORD123",
            date: "2023-10-15",
            customer: "John Doe",
            total: "$1,200",
            status: "Shipped",
        },
        {
            id: "ORD124",
            date: "2023-10-16",
            customer: "Jane Smith",
            total: "$800",
            status: "Processing",
        },
        {
            id: "ORD125",
            date: "2023-10-17",
            customer: "Alice Johnson",
            total: "$500",
            status: "Delivered",
        },
    ];

    return (
        <div className="overflow-x-auto p-4">
            <table className="w-full min-w-[600px]">
                <thead>
                <tr className="text-gray-500 text-sm border-b border-gray-800">
                    <th className="text-left pb-4">Order ID</th>
                    <th className="text-left pb-4">Date</th>
                    <th className="text-left pb-4 hidden md:table-cell">Customer</th>
                    <th className="text-left pb-4">Total</th>
                    <th className="text-left pb-4">Status</th>
                </tr>
                </thead>
                <tbody>
                {orderData.map((order) => (
                    <tr key={order.id} className="border-b border-gray-800">
                        <td className="py-4">{order.id}</td>
                        <td>{order.date}</td>
                        <td className="hidden md:table-cell">{order.customer}</td>
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
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrdersPage;
