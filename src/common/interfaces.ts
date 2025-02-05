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

export enum OrderStatus {
    PENDING = "PENDING",
    PROCESSING = "PROCESSING",
    SHIPPED = "SHIPPED",
    DELIVERED = "DELIVERED",
    CANCELLED = "CANCELLED"
}

export interface Medication {
    id: string;
    name: string;
    price: string; // Changed to string to match the earlier definition
}

export interface Order {
    id: string;
    userId: string;
    medications: Medication[];
    totalAmount: string; // Changed to string
    deliveryAddress?: string;
    specialInstructions?: string;
    status: "Shipped" | "Processing" | "Delivered"; // Match the earlier type
    date: string;
    paymentReference?: string;
}

export interface CreateOrderDto {
    userId: string;
    medicationIds: string[];
    deliveryAddress?: string;
    specialInstructions?: string;
    deliveryPartnerId?: string;
    status?: OrderStatus;
}

export interface CreatePaymentDto {
    orderId: string;
    amount: number;
    email: string;
}

export interface VerifyPaymentDto {
    transactionId: string;
}

export interface CreateDeliveryPartnerDto {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    vehicleType?: string;
    isAvailable?: boolean;
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
    stockQuantity: number;
    manufacturer: string;
    status: "In Stock" | "Out of Stock";
}

export interface DeliveryPartner {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    vehicleType?: string;
    isAvailable?: boolean;
}

export interface CreateMedicationDto {
    name: string;
    price: string;
    manufacturer: string;
    description: string;
    dosage: string;
    stockQuantity: number;
}

export interface PaginatedResponse<T> {
    data: T[];
    meta: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
}
