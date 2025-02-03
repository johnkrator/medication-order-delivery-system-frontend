import {FC} from "react";
import {
    LayoutDashboard,
    BarChart2,
    Package,
    Users,
    ClipboardList,
    Settings,
    HelpCircle,
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
                <h1 className="text-xl font-semibold">PharmaTrade</h1>
            </div>

            <nav className="space-y-2">
                <SidebarItem to="/" icon={LayoutDashboard} text="Dashboard"/>
                <SidebarItem to="/payments" icon={Package} text="Payments"/>
                <SidebarItem to="/medications" icon={BarChart2} text="Medications"/>
                <SidebarItem to="/orders" icon={ClipboardList} text="Orders"/>
                <SidebarItem to="/users" icon={Users} text="Users"/>
                <SidebarItem to="/deliveries" icon={HelpCircle} text="Delivery Partners"/>
                <SidebarItem to="/settings" icon={Settings} text="Settings"/>
            </nav>
        </div>
    );
};

export default Sidebar;
