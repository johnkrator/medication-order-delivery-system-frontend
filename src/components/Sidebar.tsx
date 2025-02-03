import {FC} from "react";
import {
    LayoutDashboard,
    Package,
    Users,
    Settings,
    LucideLogIn, LucideAlignHorizontalDistributeEnd, LucideListOrdered, LucideMedal,
} from "lucide-react";
import {Link, useLocation} from "react-router-dom";
import {SidebarItemProps, SidebarProps} from "../common/interfaces.ts";

const SidebarItem: FC<SidebarItemProps> = ({icon: Icon, text, to}) => {
    const location = useLocation();
    const isActive = location.pathname === to;

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
                <SidebarItem to="/" icon={LayoutDashboard} text="Dashboard"/>
                <SidebarItem to="/payments" icon={Package} text="Payments"/>
                <SidebarItem to="/medications" icon={LucideMedal} text="Medications"/>
                <SidebarItem to="/orders" icon={LucideListOrdered} text="Orders"/>
                <SidebarItem to="/users" icon={Users} text="Users"/>
                <SidebarItem to="/deliveries" icon={LucideAlignHorizontalDistributeEnd} text="Delivery Partners"/>
                <SidebarItem to="/settings" icon={Settings} text="Settings"/>
                <SidebarItem to="/login" icon={LucideLogIn} text="Login"/>
            </nav>
        </div>
    );
};

export default Sidebar;
