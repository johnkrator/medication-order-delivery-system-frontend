import React, {useEffect, useState} from "react";
import axios from "axios";

interface Payment {
    id: string;
    amount: number;
    status: string;
    transactionReference: string;
    order: {
        id: string;
        totalAmount: string;
    };
}

const PaymentPage: React.FC = () => {
    const [payments, setPayments] = useState<Payment[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const response = await axios.get("/api/payments");
                setPayments(response.data);
            } catch (err) {
                setError("Failed to fetch payments");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPayments();
    }, []);

    if (loading) return <div>Loading payments...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="overflow-x-auto p-4">
            <table className="w-full min-w-[600px]">
                <thead>
                <tr className="text-gray-500 text-sm border-b border-gray-800">
                    <th className="text-left pb-4">Payment ID</th>
                    <th className="text-left pb-4">Amount</th>
                    <th className="text-left pb-4">Status</th>
                    <th className="text-left pb-4">Order ID</th>
                    <th className="text-left pb-4">Transaction Reference</th>
                </tr>
                </thead>
                <tbody>
                {payments.map((payment) => (
                    <tr key={payment.id} className="border-b border-gray-800">
                        <td className="py-4">{payment.id}</td>
                        <td>${payment.amount.toFixed(2)}</td>
                        <td>
                <span
                    className={`px-3 py-1 rounded-full text-sm ${
                        payment.status === "SUCCESSFUL"
                            ? "bg-green-900/20 text-green-500"
                            : payment.status === "PENDING"
                                ? "bg-yellow-900/20 text-yellow-500"
                                : "bg-red-900/20 text-red-500"
                    }`}
                >
                  {payment.status}
                </span>
                        </td>
                        <td>{payment.order.id}</td>
                        <td>{payment.transactionReference}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default PaymentPage;
