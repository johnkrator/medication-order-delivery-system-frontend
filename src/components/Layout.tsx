import {FC, useState} from "react";
import {Menu, X} from "lucide-react";
import {LayoutProps} from "../common/interfaces.ts";
import Sidebar from "./Sidebar.tsx";

const Layout: FC<LayoutProps> = ({children}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    return (
        <div className="flex flex-col md:flex-row h-screen bg-black text-white">
            {/* Mobile Header */}
            <div className="md:hidden flex justify-between items-center p-4 border-b border-gray-800">
                <h1 className="text-xl font-semibold">PharmaTrade</h1>
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X/> : <Menu/>}
                </button>
            </div>

            {/* Sidebar */}
            <Sidebar isMobileMenuOpen={isMobileMenuOpen}/>

            {/* Main Content */}
            <div className="flex-1 overflow-auto">
                <div className="p-4 md:p-6">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
