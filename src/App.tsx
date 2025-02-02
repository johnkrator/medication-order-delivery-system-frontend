import {FC} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import InventoryPage from "./pages/InventoryPage";
import SalesPage from "./pages/SalesPage";
import OrdersPage from "./pages/OrdersPage";
import CustomersPage from "./pages/CustomersPage";
import SupportPage from "./pages/SupportPage";
import SettingsPage from "./pages/SettingsPage";

const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/inventory" element={<InventoryPage/>}/>
                <Route path="/sales" element={<SalesPage/>}/>
                <Route path="/orders" element={<OrdersPage/>}/>
                <Route path="/customers" element={<CustomersPage/>}/>
                <Route path="/support" element={<SupportPage/>}/>
                <Route path="/settings" element={<SettingsPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
