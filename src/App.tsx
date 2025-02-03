import {FC} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PaymentPage from "./pages/PaymentPage.tsx";
import MedicationPage from "./pages/MedicationPage.tsx";
import OrdersPage from "./pages/OrdersPage";
import UsersPage from "./pages/UsersPage.tsx";
import DeliveryPartnerPage from "./pages/DeliveryPartnerPage.tsx";
import SettingsPage from "./pages/SettingsPage";

const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/payments" element={<PaymentPage/>}/>
                <Route path="/medications" element={<MedicationPage/>}/>
                <Route path="/orders" element={<OrdersPage/>}/>
                <Route path="/users" element={<UsersPage/>}/>
                <Route path="/deliveries" element={<DeliveryPartnerPage/>}/>
                <Route path="/settings" element={<SettingsPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
