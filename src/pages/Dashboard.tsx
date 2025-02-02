import {FC, useState} from "react";
import Layout from "../components/Layout";
import SalesChart from "../components/SalesChart";
import InventoryTable from "../components/InventoryRow.tsx";
import {DashboardHeader} from "../components/DashboardHeader.tsx";

const Dashboard: FC = () => {
    const [selectedTimeRange, setSelectedTimeRange] = useState<string>("Last week");

    return (
        <Layout>
            <DashboardHeader/>
            {/*<StatsGrid/>*/}
            <SalesChart
                selectedTimeRange={selectedTimeRange}
                setSelectedTimeRange={setSelectedTimeRange}
            />
            <InventoryTable/>
        </Layout>
    );
};

export default Dashboard;
