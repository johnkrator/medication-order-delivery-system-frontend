import {FC} from "react";

interface Medication {
    id: string;
    name: string;
    quantity: number;
    price: string;
    status: "In Stock" | "Out of Stock";
}

const MedicationPage: FC = () => {
    const medicationData: Medication[] = [
        {
            id: "MED001",
            name: "Paracetamol",
            quantity: 100,
            price: "$5.00",
            status: "In Stock",
        },
        {
            id: "MED002",
            name: "Amoxicillin",
            quantity: 50,
            price: "$10.00",
            status: "In Stock",
        },
        {
            id: "MED003",
            name: "Ibuprofen",
            quantity: 0,
            price: "$7.50",
            status: "Out of Stock",
        },
    ];

    return (
        <div className="overflow-x-auto p-4">
            <table className="w-full min-w-[600px]">
                <thead>
                <tr className="text-gray-500 text-sm border-b border-gray-800">
                    <th className="text-left pb-4">Medication ID</th>
                    <th className="text-left pb-4">Name</th>
                    <th className="text-left pb-4">Quantity</th>
                    <th className="text-left pb-4 hidden md:table-cell">Price</th>
                    <th className="text-left pb-4">Status</th>
                </tr>
                </thead>
                <tbody>
                {medicationData.map((medication) => (
                    <tr key={medication.id} className="border-b border-gray-800">
                        <td className="py-4">{medication.id}</td>
                        <td>{medication.name}</td>
                        <td>{medication.quantity}</td>
                        <td className="hidden md:table-cell">{medication.price}</td>
                        <td>
                                <span
                                    className={`px-3 py-1 rounded-full text-sm ${
                                        medication.status === "In Stock"
                                            ? "bg-green-900/20 text-green-500"
                                            : "bg-red-900/20 text-red-500"
                                    }`}
                                >
                                    {medication.status}
                                </span>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default MedicationPage;
