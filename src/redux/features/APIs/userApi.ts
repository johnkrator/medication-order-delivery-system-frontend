import axios from "axios";

const API_URL = "https://pharmatradeapi.vercel.app/api";

// Create an axios instance with default headers
const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Add a request interceptor to include the Authorization header if needed
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token"); // Assuming you store the token in localStorage
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Add a response interceptor to handle errors globally
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            console.error("API Error:", error.response.data);
        } else if (error.request) {
            console.error("No response received:", error.request);
        } else {
            console.error("Request setup error:", error.message);
        }
        return Promise.reject(error);
    }
);

export const adminSignup = async (userData: {
    username: string;
    email: string;
    password: string;
    mobileNumber?: string;
    roles?: string[];
    isAdmin?: boolean;
}) => {
    const response = await api.post("/user/create-admin", userData);
    return response.data;
};

export const signup = async (userData: {
    username: string;
    email: string;
    password: string;
    mobileNumber?: string;
    roles?: string[];
    isAdmin?: boolean;
}) => {
    const response = await api.post("/user/create-user", userData);
    return response.data;
};

export const login = async (credentials: {
    email: string;
    password: string;
}) => {
    const response = await api.post("/user/login", credentials);
    return response.data;
};
