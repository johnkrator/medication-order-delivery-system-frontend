import {FC} from "react";
import {InventoryItem} from "../common/interfaces.ts";

const InventoryRow: FC<InventoryItem> = ({
                                             name,
                                             value,
                                             daily,
                                             balance,
                                             apy,
                                             state,
                                             startDate,
                                             liquidity
                                         }) => (
    <tr className="border-b border-gray-800">
        <td className="py-4">
            <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-800 rounded-full mr-3"></div>
                <div>
                    <p className="font-semibold">{name}</p>
                    <p className="text-gray-500 text-sm">{value}</p>
                </div>
            </div>
        </td>
        <td className="text-green-500">{daily}</td>
        <td>{balance}</td>
        <td className="hidden md:table-cell">{apy}</td>
        <td className="hidden md:table-cell">
      <span className={`px-3 py-1 rounded-full text-sm ${
          state === "In Stock" ? "bg-green-900/20 text-green-500" : "bg-yellow-900/20 text-yellow-500"
      }`}>
        {state}
      </span>
        </td>
        <td className="hidden lg:table-cell">{startDate}</td>
        <td className="hidden lg:table-cell">
            <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                    <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                            i < liquidity ? "bg-orange-500" : "bg-gray-700"
                        }`}
                    />
                ))}
            </div>
        </td>
        <td>
            <button className="text-gray-500">•••</button>
        </td>
    </tr>
);

const InventoryTable: FC = () => {
    const inventoryData: InventoryItem[] = [
        {
            name: "Paracetamol",
            value: "$13,643.21",
            daily: "+$213.8",
            balance: "$13,954.04",
            apy: "8.56%",
            state: "In Stock",
            startDate: "05.10.2023",
            liquidity: 3
        },
        {
            name: "Amoxicillin",
            value: "$1,432.00",
            daily: "+$45.1",
            balance: "$3,954.04",
            apy: "5.44%",
            state: "In Stock",
            startDate: "12.03.2023",
            liquidity: 2
        },
        {
            name: "Ibuprofen",
            value: "$2,123.87",
            daily: "+$13.5",
            balance: "$3,954.04",
            apy: "4.12%",
            state: "Low Stock",
            startDate: "21.01.2023",
            liquidity: 1
        }
    ];

    return (
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead>
                <tr className="text-gray-500 text-sm border-b border-gray-800">
                    <th className="text-left pb-4">Product</th>
                    <th className="text-left pb-4">Daily Sales</th>
                    <th className="text-left pb-4">Stock Value ↓</th>
                    <th className="text-left pb-4 hidden md:table-cell">Growth ↓</th>
                    <th className="text-left pb-4 hidden md:table-cell">Status</th>
                    <th className="text-left pb-4 hidden lg:table-cell">Last Updated</th>
                    <th className="text-left pb-4 hidden lg:table-cell">Stock Level</th>
                    <th className="text-left pb-4"></th>
                </tr>
                </thead>
                <tbody>
                {inventoryData.map((item, index) => (
                    <InventoryRow key={index} {...item} />
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default InventoryTable;
