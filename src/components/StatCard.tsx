import {StatCardProps} from "../common/interfaces.ts";

export const StatCard = ({title, value, change, percentage}: StatCardProps) => (
    <div className="bg-[#111111] rounded-lg p-6">
        <p className="text-gray-500 text-sm mb-2">{title}</p>
        <p className="text-2xl font-semibold mb-1">{value}</p>
        <p className="text-green-500 text-sm">
            {change} {percentage}
        </p>
    </div>
);
