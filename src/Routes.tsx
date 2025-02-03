import {createBrowserRouter} from "react-router-dom";
import Dashboard from "./pages/Dashboard.tsx";
import Layout from "./components/Layout.tsx";
import PaymentPage from "./pages/PaymentPage.tsx";
import MedicationPage from "./pages/MedicationPage.tsx";
import OrdersPage from "./pages/OrdersPage.tsx";
import UsersPage from "./pages/UsersPage.tsx";
import DeliveryPartnerPage from "./pages/DeliveryPartnerPage.tsx";
import SettingsPage from "./pages/SettingsPage.tsx";
import Login from "./pages/auth/Login.tsx";
import Signup from "./pages/auth/Signup.tsx";

const Routes = () => {
    return createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    path: "/",
                    element: <Dashboard/>
                },
                {path: "payments", element: <PaymentPage/>},
                {path: "medications", element: <MedicationPage/>},
                {path: "orders", element: <OrdersPage/>},
                {path: "users", element: <UsersPage/>},
                {path: "deliveries", element: <DeliveryPartnerPage/>},
                {path: "settings", element: <SettingsPage/>},
                {path: "login", element: <Login/>},
                {path: "register", element: <Signup/>},
            ]
        }
    ]);
};

export default Routes;
