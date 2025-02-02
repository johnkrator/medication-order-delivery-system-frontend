import {FC} from "react";
import {LineChart, Line, XAxis, YAxis, ResponsiveContainer} from "recharts";
import {ChartDataPoint, SalesChartProps} from "../common/interfaces.ts";
import {TimeRangeButton} from "./TimeRangeButton.tsx";

const SalesChart: FC<SalesChartProps> = ({selectedTimeRange, setSelectedTimeRange}) => {
    const chartData: ChartDataPoint[] = [
        {name: "1", value: 400},
        {name: "2", value: 300},
        {name: "3", value: 600},
        {name: "4", value: 200},
        {name: "5", value: 800},
        {name: "6", value: 500}
    ];

    return (
        <div className="bg-[#111111] rounded-lg p-4 md:p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <h3 className="text-lg font-semibold">Sales Statistics</h3>
                <div className="flex flex-wrap gap-2">
                    <TimeRangeButton
                        text="Today"
                        active={selectedTimeRange === "Today"}
                        onClick={() => setSelectedTimeRange("Today")}
                    />
                    <TimeRangeButton
                        text="Week"
                        active={selectedTimeRange === "Last week"}
                        onClick={() => setSelectedTimeRange("Last week")}
                    />
                    <TimeRangeButton
                        text="Month"
                        active={selectedTimeRange === "Last month"}
                        onClick={() => setSelectedTimeRange("Last month")}
                    />
                    <TimeRangeButton
                        text="6M"
                        active={selectedTimeRange === "Last 6 month"}
                        onClick={() => setSelectedTimeRange("Last 6 month")}
                    />
                    <TimeRangeButton
                        text="Year"
                        active={selectedTimeRange === "Year"}
                        onClick={() => setSelectedTimeRange("Year")}
                    />
                </div>
            </div>
            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                        <Line type="monotone" dataKey="value" stroke="#FF6B00" strokeWidth={2} dot={false}/>
                        <XAxis dataKey="name" stroke="#666"/>
                        <YAxis stroke="#666"/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default SalesChart;
