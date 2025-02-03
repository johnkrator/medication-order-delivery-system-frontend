import {FC} from "react";
import {
    LayoutDashboard,
    Users,
    Settings,
    LucideLogIn,
    LucideAlignHorizontalDistributeEnd,
    LucideListOrdered,
    LucideMedal, DollarSignIcon
} from "lucide-react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {SidebarItemProps, SidebarProps} from "../common/interfaces.ts";
import {RootState} from "../redux/types/redux.ts";
import {logout, UserRole} from "../redux/features/userSlice.ts";

const SidebarItem: FC<SidebarItemProps & { allowedRoles?: UserRole[] }> = ({
                                                                               icon: Icon,
                                                                               text,
                                                                               to,
                                                                               allowedRoles = ["admin", "user"]
                                                                           }) => {
    const location = useLocation();
    const isActive = location.pathname === to;
    const userRoles = useSelector((state: RootState) => state.user.user?.roles ?? []);
    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);

    // Check if user has at least one of the allowed roles
    const hasAllowedRole = allowedRoles.some(role => userRoles.includes(role));

    // If user is not authenticated or doesn't have an allowed role, don't render the item
    if (!isAuthenticated || !hasAllowedRole) {
        return null;
    }

    return (
        <Link to={to}>
            <div className={`flex items-center px-4 py-2 rounded-lg ${isActive ? "bg-gray-900" : "hover:bg-gray-900"}`}>
                <Icon className="w-5 h-5 mr-3"/>
                <span>{text}</span>
            </div>
        </Link>
    );
};

const Sidebar: FC<SidebarProps> = ({isMobileMenuOpen}) => {
    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
    useSelector((state: RootState) => state.user.user?.roles ?? []);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    return (
        <div className={`
            ${isMobileMenuOpen ? "block" : "hidden"} 
            md:block w-full md:w-64 bg-black border-r border-gray-800 p-4
            fixed md:relative top-[64px] md:top-0 h-screen z-50
        `}>
            <div className="hidden md:block mb-8">
                <Link to="/">
                    <h1 className="text-xl font-semibold">PharmaTrade</h1>
                </Link>
            </div>

            <nav className="space-y-2 flex flex-col gap-1">
                {isAuthenticated ? (
                    <>
                        <SidebarItem to="/" icon={LayoutDashboard} text="DashboardPage"/>

                        {/* Admin-only items */}
                        <SidebarItem
                            to="/payments"
                            icon={DollarSignIcon}
                            text="Payments"
                            allowedRoles={["admin"]}
                        />
                        <SidebarItem
                            to="/orders"
                            icon={LucideListOrdered}
                            text="Orders"
                            allowedRoles={["admin"]}
                        />
                        <SidebarItem
                            to="/users"
                            icon={Users}
                            text="Users"
                            allowedRoles={["admin"]}
                        />
                        <SidebarItem
                            to="/deliveries"
                            icon={LucideAlignHorizontalDistributeEnd}
                            text="Delivery Partners"
                            allowedRoles={["admin"]}
                        />

                        {/* Items for both admin and user */}
                        <SidebarItem
                            to="/medications"
                            icon={LucideMedal}
                            text="Medications"
                        />
                        <SidebarItem
                            to="/settings"
                            icon={Settings}
                            text="Settings"
                        />

                        <button
                            onClick={handleLogout}
                            className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-900 w-full text-left cursor-pointer"
                        >
                            <LucideLogIn className="w-5 h-5 mr-3"/>
                            <span>Logout</span>
                        </button>
                    </>
                ) : (
                    <SidebarItem to="/login" icon={LucideLogIn} text="Login"/>
                )}
            </nav>
        </div>
    );
};

export default Sidebar;
