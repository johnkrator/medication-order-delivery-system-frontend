export interface User {
    id: string;
    username: string;
    email: string;
    role: "user" | "admin";
}

export interface Order {
    id: string;
    userId: string;
    productName: string;
    quantity: number;
    status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
    createdAt: string;
}

export const users: User[] = [
    {id: "1", username: "user1", email: "user1@example.com", role: "user"},
    {id: "2", username: "user2", email: "user2@example.com", role: "user"},
    {id: "3", username: "admin1", email: "admin1@example.com", role: "admin"},
];

export const orders: Order[] = [
    {id: "1", userId: "1", productName: "Product A", quantity: 2, status: "pending", createdAt: "2023-04-01"},
    {id: "2", userId: "2", productName: "Product B", quantity: 1, status: "processing", createdAt: "2023-04-02"},
    {id: "3", userId: "1", productName: "Product C", quantity: 3, status: "shipped", createdAt: "2023-04-03"},
];
