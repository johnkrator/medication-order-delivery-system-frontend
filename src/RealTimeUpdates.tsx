import {useEffect, useState} from "react";
import {useQueryClient} from "react-query";

const RealTimeUpdates = () => {
    const [, setSocket] = useState<WebSocket | null>(null);
    const queryClient = useQueryClient();

    useEffect(() => {
        const ws = new WebSocket("ws://your-websocket-server-url");

        ws.onopen = () => {
            console.log("WebSocket connection established");
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.type === "ORDER_UPDATE") {
                queryClient.invalidateQueries("orders");
                queryClient.invalidateQueries("allOrders");
            }
        };

        ws.onerror = (error) => {
            console.error("WebSocket error:", error);
        };

        ws.onclose = () => {
            console.log("WebSocket connection closed");
        };

        setSocket(ws);

        return () => {
            ws.close();
        };
    }, [queryClient]);

    return null;
};

export default RealTimeUpdates;
