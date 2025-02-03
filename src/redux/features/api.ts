import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const signup = async (userData: {
    username: string;
    email: string;
    password: string;
    mobileNumber?: string;
    roles?: string[];
    isAdmin?: boolean;
}) => {
    const response = await axios.post(`${API_URL}/user/signup`, userData);
    return response.data;
};

export const login = async (credentials: {
    email: string;
    password: string;
}) => {
    const response = await axios.post(`${API_URL}/user/login`, credentials);
    return response.data;
};
