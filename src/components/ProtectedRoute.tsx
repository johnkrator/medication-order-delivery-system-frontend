import React from "react";
import {Navigate, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../redux/types/redux";

interface ProtectedRouteProps {
    allowedRoles?: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({allowedRoles}) => {
    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
    const userRoles = useSelector((state: RootState) => state.user.user?.roles ?? []);

    if (!isAuthenticated) {
        console.warn("User not authenticated. Redirecting to login.");
        return <Navigate to="/login" replace/>;
    }

    // Ensure allowedRoles exists, otherwise assume all authenticated users can access
    if (allowedRoles?.length) {
        const hasAccess = userRoles.some(role => allowedRoles.includes(role));

        if (!hasAccess) {
            console.warn("User does not have the required roles. Redirecting to unauthorized.");
            return <Navigate to="/unauthorized" replace/>;
        }
    }

    return <Outlet/>;
};

export default ProtectedRoute;
