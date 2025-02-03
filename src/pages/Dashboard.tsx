import {FC, useState} from "react";
import SalesChart from "../components/SalesChart";
import InventoryTable from "../components/InventoryRow";
import {StatCard} from "../components/StatCard";

const Dashboard: FC = () => {
    const [selectedTimeRange, setSelectedTimeRange] = useState<string>("Last week");

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                <StatCard title="Total Revenue" value="$45,320" change="+12%" percentage="↑"/>
                <StatCard title="New Orders" value="320" change="+8%" percentage="↑"/>
                <StatCard title="Returning Customers" value="210" change="-5%" percentage="↓"/>
            </div>

            <SalesChart selectedTimeRange={selectedTimeRange} setSelectedTimeRange={setSelectedTimeRange}/>
            <InventoryTable/>
        </>
    );
};

export default Dashboard;
