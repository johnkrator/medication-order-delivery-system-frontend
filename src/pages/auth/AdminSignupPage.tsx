import React, {useState} from "react";
import {useMutation} from "@tanstack/react-query";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {adminSignup} from "../../redux/features/APIs/userApi.ts";
import {login as loginAction, UserRole} from "../../redux/features/userSlice.ts";
import {Eye, EyeOff} from "lucide-react";

type AdminSignupData = {
    username: string;
    email: string;
    password: string;
    mobileNumber?: string;
    roles?: string[];
    isAdmin?: boolean;
};

type SignupResponse = {
    token: string;
    user: {
        id: string;
        username: string;
        email: string;
        roles: string[];
    };
};

type ApiErrorResponse = {
    response?: {
        data?: {
            message?: string;
        };
    };
    message?: string;
};

const AdminSignupPage: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [formData, setFormData] = useState<AdminSignupData>({
        username: "",
        email: "",
        password: "",
        mobileNumber: "",
        roles: ["admin"],
        isAdmin: true,
    });

    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const mutation = useMutation<SignupResponse, ApiErrorResponse, AdminSignupData>({
        mutationFn: adminSignup,
        onSuccess: (data) => {
            const validRoles = data.user.roles.filter((role): role is UserRole =>
                role === "admin" || role === "user"
            );

            dispatch(loginAction({
                token: data.token,
                user: {
                    id: data.user.id,
                    username: data.user.username,
                    email: data.user.email,
                    roles: validRoles.length > 0 ? validRoles : ["admin", "user"],
                }
            }));
            navigate("/");
        },
        onError: (error) => {
            const message = error.response?.data?.message ||
                error.message ||
                "Admin signup failed. Please try again.";
            setErrorMessage(message);
        },
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
        if (errorMessage) setErrorMessage(null);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutation.mutate(formData);
    };

    return (
        <div className="flex items-center justify-center lg:mt-50 mt-20">
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <input
                    name="username"
                    placeholder="Admin Username"
                    onChange={handleChange}
                    className="border border-white px-3 py-2 outline rounded-md lg:w-96 w-[80vw]"
                    required
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Admin Email"
                    onChange={handleChange}
                    className="border border-white px-3 py-2 outline rounded-md lg:w-96 w-[80vw]"
                    required
                />
                <div className="relative">
                    <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        onChange={handleChange}
                        className="border border-white px-3 py-2 outline rounded-md lg:w-96 w-[80vw]"
                        required
                    />
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
                    >
                        {showPassword ? (
                            <EyeOff className="w-5 h-5"/>
                        ) : (
                            <Eye className="w-5 h-5"/>
                        )}
                    </button>
                </div>
                <input
                    name="mobileNumber"
                    placeholder="Mobile Number"
                    onChange={handleChange}
                    className="border border-white px-3 py-2 outline rounded-md lg:w-96 w-[80vw]"
                />
                {errorMessage && (
                    <p className="text-red-500 text-sm">{errorMessage}</p>
                )}
                <button
                    type="submit"
                    disabled={mutation.isPending}
                    className="bg-[#101727] text-white px-4 py-2 rounded-md lg:w-96 w-[80vw] cursor-pointer font-bold"
                >
                    {mutation.isPending ? "Creating Admin..." : "Create Admin"}
                </button>
                <p>
                    Already have an account?{" "}
                    <Link to="/login" className="hover:underline duration-300">
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default AdminSignupPage;
