import {FC, useState} from "react";
import Layout from "../components/Layout";
import SalesChart from "../components/SalesChart";
import InventoryTable from "../components/InventoryRow.tsx";
import {DashboardHeader} from "../components/DashboardHeader.tsx";
import {StatCard} from "../components/StatCard.tsx";

const Dashboard: FC = () => {
    const [selectedTimeRange, setSelectedTimeRange] = useState<string>("Last week");

    return (
        <Layout>
            <DashboardHeader/>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                <StatCard title="Total Revenue" value="$45,320" change="+12%" percentage="↑"/>
                <StatCard title="New Orders" value="320" change="+8%" percentage="↑"/>
                <StatCard title="Returning Customers" value="210" change="-5%" percentage="↓"/>
            </div>

            <SalesChart selectedTimeRange={selectedTimeRange} setSelectedTimeRange={setSelectedTimeRange}/>
            <InventoryTable/>
        </Layout>
    );
};

export default Dashboard;
