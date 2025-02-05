import React, {useState} from "react";
import {Eye, EyeOff} from "lucide-react";
import {useMutation} from "@tanstack/react-query";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {login as loginApi} from "../../redux/features/APIs/userApi.ts";
import {login as loginAction} from "../../redux/features/userSlice.ts";
import {UserRole} from "../../redux/features/userSlice";

type LoginCredentials = {
    email: string;
    password: string;
};

type LoginResponse = {
    token: string;
    user: {
        id: string;
        username: string;
        email: string;
        roles: string[];
    };
};

const LoginPage: React.FC = () => {
    const [credentials, setCredentials] = useState<LoginCredentials>({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const mutation = useMutation<LoginResponse, Error, LoginCredentials>({
        mutationFn: loginApi,
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
                    roles: validRoles.length > 0 ? validRoles : ["user"],
                },
            }));
            if (validRoles.includes("admin")) {
                navigate("/");
            } else {
                navigate("/medications");
            }
        },
        onError: (error) => {
            console.error("Login failed: ", error);
        },
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setCredentials((prev) => ({...prev, [name]: value}));
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutation.mutate(credentials);
    };

    return (
        <div className="flex flex-col gap-1 items-center justify-center lg:mt-50 mt-20">
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <input
                    className="border border-white px-3 py-2 outline rounded-md lg:w-96 w-[80vw]"
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                />
                <div className="relative">
                    <input
                        className="border border-white px-3 py-2 outline rounded-md lg:w-96 w-[80vw] pr-10"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        onChange={handleChange}
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
                <button
                    type="submit"
                    disabled={mutation.isPending}
                    className="bg-[#101727] text-white px-4 py-2 rounded-md lg:w-96 w-[80vw] cursor-pointer font-bold"
                >
                    {mutation.isPending ? "Logging in..." : "Login"}
                </button>
                <div>
                    {/*<p>*/}
                    {/*    You an admin?{" "}*/}
                    {/*    <Link to="/admin-register" className="hover:underline duration-300">*/}
                    {/*        Register*/}
                    {/*    </Link>*/}
                    {/*</p>*/}
                    <p>
                        Don't have an account?{" "}
                        <Link to="/register" className="hover:underline duration-300">
                            Register
                        </Link>
                    </p>
                </div>
            </form>
            {mutation.isError && (
                <p style={{color: "red"}}>
                    Login failed. Please try again.
                </p>
            )}
        </div>
    );
};

export default LoginPage;
