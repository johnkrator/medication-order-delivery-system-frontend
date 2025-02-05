import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../redux/store/store";
import {fetchMedications} from "../redux/features/medication/medicationThunks.ts";

const MedicationPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {medications, loading, error} = useSelector(
        (state: RootState) => state.medication
    );

    useEffect(() => {
        dispatch(fetchMedications());
    }, [dispatch]);

    if (loading) return <div className="p-4">Loading medications...</div>;
    if (error) return <div className="p-4 text-red-500">Error: {error}</div>;
    if (!medications.length) return <div className="p-4">No medications available</div>;

    return (
        <div className="overflow-x-auto p-4">
            <table className="w-full min-w-[600px]">
                <thead>
                <tr className="text-gray-500 text-sm border-b border-gray-800">
                    <th className="text-left pb-4">Medication ID</th>
                    <th className="text-left pb-4">Name</th>
                    <th className="text-left pb-4">Price</th>
                    <th className="text-left pb-4">Manufacturer</th>
                    {medications[0]?.stockQuantity !== undefined && (
                        <th className="text-left pb-4">Stock Quantity</th>
                    )}
                </tr>
                </thead>
                <tbody>
                {medications.map((medication) => (
                    <tr key={medication.id} className="border-b border-gray-800">
                        <td className="py-4">{medication.id}</td>
                        <td>{medication.name}</td>
                        <td>{medication.price}</td>
                        <td>{medication.manufacturer}</td>
                        {medication.stockQuantity !== undefined && (
                            <td>{medication.stockQuantity}</td>
                        )}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default MedicationPage;
