import {FC} from "react";

export const DashboardHeader: FC = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
                <h2 className="text-xl font-semibold">Sales Overview</h2>
                <p className="text-gray-500 text-sm">Aug 13, 2023 - Aug 18, 2023</p>
            </div>
            <div className="flex items-center">
                <span className="text-white mr-2">Region: North America</span>
                <button className="bg-gray-900 px-3 py-1 rounded-lg">▼</button>
            </div>
        </div>
    );
};
