import React, {useState} from "react";
import {useMutation} from "@tanstack/react-query";
import {useDispatch} from "react-redux";
import {signup} from "../../redux/features/api.ts";
import {login as loginAction} from "../../redux/features/userSlice.ts";
import {Link} from "react-router-dom";

type SignupData = {
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
    };
};

const Signup: React.FC = () => {
    const [formData, setFormData] = useState<SignupData>({
        username: "",
        email: "",
        password: "",
        mobileNumber: "",
        roles: [],
        isAdmin: false,
    });

    const dispatch = useDispatch();

    const mutation = useMutation<SignupResponse, Error, SignupData>({
        mutationFn: signup,
        onSuccess: (data) => {
            dispatch(loginAction(data));
        },
        onError: (error) => {
            console.error("Signup failed: ", error);
        },
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutation.mutate(formData);
    };

    return (
        <div className="flex items-center justify-center lg:mt-50 mt-20">
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <input className="border border-white px-3 py-2 outline rounded-md lg:w-96 w-[80vw]" name="username"
                       placeholder="Username" onChange={handleChange} required/>
                <input className="border border-white px-3 py-2 outline rounded-md lg:w-96 w-[80vw]" name="email"
                       type="email"
                       placeholder="Email" onChange={handleChange} required/>
                <input className="border border-white px-3 py-2 outline rounded-md lg:w-96 w-[80vw]" name="password"
                       type="password" placeholder="Password" onChange={handleChange} required/>
                <input className="border border-white px-3 py-2 outline rounded-md lg:w-96 w-[80vw]" name="mobileNumber"
                       placeholder="Mobile Number" onChange={handleChange}/>
                <button
                    className="bg-[#101727] text-white px-4 py-2 rounded-md lg:w-96 w-[80vw] cursor-pointer font-bold"
                    type="submit" disabled={mutation.isPending}>
                    {mutation.isPending ? "Signing up..." : "Signup"}
                </button>
                <p>
                    Already have an account?{" "}
                    <Link to="/login" className="hover:underline duration-300">
                        Login
                    </Link>
                </p>
            </form>
            {mutation.isError && <p style={{color: "red"}}>Signup failed. Please try again.</p>}
        </div>
    );
};

export default Signup;
