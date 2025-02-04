import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../redux/store/store";
import {fetchPayments} from "../redux/features/paymentThunks";

const PaymentPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {payments, loading, error} = useSelector((state: RootState) => state.payments);

    useEffect(() => {
        dispatch(fetchPayments());
    }, [dispatch]);

    if (loading) return <div>Loading payments...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="overflow-x-auto p-4">
            <table className="w-full min-w-[600px]">
                <thead>
                <tr className="text-gray-500 text-sm border-b border-gray-800">
                    <th className="text-left pb-4">Payment ID</th>
                    <th className="text-left pb-4">Date</th>
                    <th className="text-left pb-4">Amount</th>
                    <th className="text-left pb-4">Status</th>
                    <th className="text-left pb-4 hidden md:table-cell">Customer</th>
                </tr>
                </thead>
                <tbody>
                {payments.map((payment) => (
                    <tr key={payment.id} className="border-b border-gray-800">
                        <td className="py-4">{payment.id}</td>
                        <td>{payment.date}</td>
                        <td>{payment.amount}</td>
                        <td>
                                <span
                                    className={`px-3 py-1 rounded-full text-sm ${
                                        payment.status === "Completed"
                                            ? "bg-green-900/20 text-green-500"
                                            : payment.status === "Pending"
                                                ? "bg-yellow-900/20 text-yellow-500"
                                                : "bg-red-900/20 text-red-500"
                                    }`}
                                >
                                    {payment.status}
                                </span>
                        </td>
                        <td className="hidden md:table-cell">{payment.customer}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default PaymentPage;


// import {FC} from "react";
// import {Payment} from "../common/interfaces.ts";
//
// const PaymentPage: FC = () => {
//     const paymentData: Payment[] = [
//         {
//             id: "PAY123",
//             date: "2023-10-15",
//             amount: "$1,200",
//             status: "Completed",
//             customer: "John Doe",
//         },
//         {
//             id: "PAY124",
//             date: "2023-10-16",
//             amount: "$800",
//             status: "Pending",
//             customer: "Jane Smith",
//         },
//         {
//             id: "PAY125",
//             date: "2023-10-17",
//             amount: "$500",
//             status: "Failed",
//             customer: "Alice Johnson",
//         },
//     ];
//
//     return (
//         <div className="overflow-x-auto p-4">
//             <table className="w-full min-w-[600px]">
//                 <thead>
//                 <tr className="text-gray-500 text-sm border-b border-gray-800">
//                     <th className="text-left pb-4">Payment ID</th>
//                     <th className="text-left pb-4">Date</th>
//                     <th className="text-left pb-4">Amount</th>
//                     <th className="text-left pb-4">Status</th>
//                     <th className="text-left pb-4 hidden md:table-cell">Customer</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {paymentData.map((payment) => (
//                     <tr key={payment.id} className="border-b border-gray-800">
//                         <td className="py-4">{payment.id}</td>
//                         <td>{payment.date}</td>
//                         <td>{payment.amount}</td>
//                         <td>
//                                 <span
//                                     className={`px-3 py-1 rounded-full text-sm ${
//                                         payment.status === "Completed"
//                                             ? "bg-green-900/20 text-green-500"
//                                             : payment.status === "Pending"
//                                                 ? "bg-yellow-900/20 text-yellow-500"
//                                                 : "bg-red-900/20 text-red-500"
//                                     }`}
//                                 >
//                                     {payment.status}
//                                 </span>
//                         </td>
//                         <td className="hidden md:table-cell">{payment.customer}</td>
//                     </tr>
//                 ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };
//
// export default PaymentPage;
