import React, {useState} from "react";
import {useMutation} from "@tanstack/react-query";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {login as loginApi} from "../../redux/features/api.ts";
import {login as loginAction} from "../../redux/features/userSlice.ts";

type LoginCredentials = {
    email: string;
    password: string;
};

type LoginResponse = {
    token: string;
    user: {
        id: string;
        email: string;
    };
};

const LoginPage: React.FC = () => {
    const [credentials, setCredentials] = useState<LoginCredentials>({
        email: "",
        password: "",
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const mutation = useMutation<LoginResponse, Error, LoginCredentials>({
        mutationFn: loginApi,
        onSuccess: (data) => {
            dispatch(loginAction(data));
            navigate("/");
        },
        onError: (error) => {
            console.error("LoginPage failed: ", error);
        },
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setCredentials((prev) => ({...prev, [name]: value}));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutation.mutate(credentials);
    };

    return (
        <div className="flex items-center justify-center lg:mt-50 mt-20">
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <input
                    className="border border-white px-3 py-2 outline rounded-md lg:w-96 w-[80vw]"
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                />
                <input
                    className="border border-white px-3 py-2 outline rounded-md lg:w-96 w-[80vw]"
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                />
                <button
                    type="submit"
                    disabled={mutation.isPending}
                    className="bg-[#101727] text-white px-4 py-2 rounded-md lg:w-96 w-[80vw] cursor-pointer font-bold"
                >
                    {mutation.isPending ? "Logging in..." : "LoginPage"}
                </button>
                <div>
                    <p>
                        You an admin?{" "}
                        <Link to="/admin-register" className="hover:underline duration-300">
                            Register
                        </Link>
                    </p>
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
