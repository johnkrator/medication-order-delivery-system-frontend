import React from "react";

export interface InventoryItem {
    name: string;
    value: string;
    daily: string;
    balance: string;
    apy: string;
    state: "In Stock" | "Low Stock";
    startDate: string;
    liquidity: 1 | 2 | 3;
}

export interface StatCardProps {
    title: string;
    value: string;
    change: string;
    percentage: string;
}

export interface SidebarItemProps {
    icon: React.ElementType;
    text: string;
    to: string;
}

export interface SidebarProps {
    isMobileMenuOpen: boolean;
}

export interface TimeRangeButtonProps {
    text: string;
    active: boolean;
    onClick: () => void;
}

export interface LayoutProps {
    children: React.ReactNode;
}

export interface SalesChartProps {
    selectedTimeRange: string;
    setSelectedTimeRange: (range: string) => void;
}

export type ChartDataPoint = {
    name: string;
    value: number;
}

export interface Payment {
    id: string;
    date: string;
    amount: string;
    status: "Completed" | "Pending" | "Failed";
    customer: string;
}

export interface Medication {
    id: string;
    name: string;
    quantity: number;
    price: string;
    status: "In Stock" | "Out of Stock";
}

export interface Order {
    id: string;
    date: string;
    customer: string;
    total: string;
    status: "Shipped" | "Processing" | "Delivered";
}

export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
}
