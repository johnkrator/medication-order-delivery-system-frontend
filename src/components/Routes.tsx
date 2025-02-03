import {createBrowserRouter} from "react-router-dom";
import Layout from "./Layout.tsx";
import DashboardPage from "../pages/DashboardPage.tsx";
import PaymentPage from "../pages/PaymentPage.tsx";
import MedicationPage from "../pages/MedicationPage.tsx";
import OrdersPage from "../pages/OrdersPage.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import DeliveryPartnerPage from "../pages/DeliveryPartnerPage.tsx";
import SettingsPage from "../pages/SettingsPage.tsx";
import LoginPage from "../pages/auth/LoginPage.tsx";
import UserSignupPage from "../pages/auth/UserSignupPage.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";
import AdminSignupPage from "../pages/auth/AdminSignupPage.tsx";
import ErrorPage from "../pages/ErrorPage.tsx";
import UnauthorizedPage from "./UnauthorizedPage.tsx";

const Routes = () => {
    return createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    element: <ProtectedRoute allowedRoles={["admin", "user"]}/>,
                    children: [
                        {path: "/", element: <DashboardPage/>},
                        {path: "medications", element: <MedicationPage/>},
                        {path: "settings", element: <SettingsPage/>},
                    ]
                },
                {
                    element: <ProtectedRoute allowedRoles={["admin"]}/>,
                    children: [
                        {path: "payments", element: <PaymentPage/>},
                        {path: "orders", element: <OrdersPage/>},
                        {path: "users", element: <UsersPage/>},
                        {path: "deliveries", element: <DeliveryPartnerPage/>},
                    ]
                },
                {path: "login", element: <LoginPage/>},
                {path: "register", element: <UserSignupPage/>},
                {path: "admin-register", element: <AdminSignupPage/>},
                {path: "unauthorized", element: <UnauthorizedPage/>},
            ],
            errorElement: <ErrorPage/>
        }
    ]);
};

export default Routes;
