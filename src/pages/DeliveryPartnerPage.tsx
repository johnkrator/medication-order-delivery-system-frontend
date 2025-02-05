import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../redux/store/store";
import {fetchDeliveryPartners} from "../redux/features/delivery-partner/deliveryPartnerThunks.ts";

const DeliveryPartnerPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {deliveryPartners, loading, error} = useSelector((state: RootState) => state.deliveryPartner);

    useEffect(() => {
        dispatch(fetchDeliveryPartners());
    }, [dispatch]);

    if (loading) return <div>Loading delivery partners...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="overflow-x-auto p-4">
            <table className="w-full min-w-[600px]">
                <thead>
                <tr className="text-gray-500 text-sm border-b border-gray-800">
                    <th className="text-left pb-4">First Name</th>
                    <th className="text-left pb-4">Last Name</th>
                    <th className="text-left pb-4">Email</th>
                    <th className="text-left pb-4">Phone</th>
                    <th className="text-left pb-4">Vehicle Type</th>
                    <th className="text-left pb-4">Availability</th>
                </tr>
                </thead>
                <tbody>
                {deliveryPartners.map((partner) => (
                    <tr key={partner.id} className="border-b border-gray-800">
                        <td className="py-4">{partner.firstName}</td>
                        <td>{partner.lastName}</td>
                        <td>{partner.email}</td>
                        <td>{partner.phone}</td>
                        <td>{partner.vehicleType}</td>
                        <td>
                                <span
                                    className={`px-3 py-1 rounded-full text-sm ${
                                        partner.isAvailable
                                            ? "bg-green-900/20 text-green-500"
                                            : "bg-red-900/20 text-red-500"
                                    }`}
                                >
                                    {partner.isAvailable ? "Available" : "Unavailable"}
                                </span>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default DeliveryPartnerPage;
