import {FC} from "react";
import {User} from "../common/interfaces.ts";

const UsersPage: FC = () => {
    const userData: User[] = [
        {
            id: "USER001",
            name: "John Doe",
            email: "john.doe@example.com",
            role: "Admin",
        },
        {
            id: "USER002",
            name: "Jane Smith",
            email: "jane.smith@example.com",
            role: "User",
        },
        {
            id: "USER003",
            name: "Alice Johnson",
            email: "alice.johnson@example.com",
            role: "User",
        },
    ];

    return (
        <div className="overflow-x-auto p-4">
            <table className="w-full min-w-[600px]">
                <thead>
                <tr className="text-gray-500 text-sm border-b border-gray-800">
                    <th className="text-left pb-4">User ID</th>
                    <th className="text-left pb-4">Name</th>
                    <th className="text-left pb-4">Email</th>
                    <th className="text-left pb-4 hidden md:table-cell">Role</th>
                </tr>
                </thead>
                <tbody>
                {userData.map((user) => (
                    <tr key={user.id} className="border-b border-gray-800">
                        <td className="py-4">{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td className="hidden md:table-cell">{user.role}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersPage;
