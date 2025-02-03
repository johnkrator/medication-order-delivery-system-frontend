import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type User = {
    id: string;
    email: string;
};

type UserState = {
    isAuthenticated: boolean;
    token: string | null;
    user: User | null;
};

const initialState: UserState = {
    isAuthenticated: !!localStorage.getItem("token"),
    token: localStorage.getItem("token"),
    user: localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user")!)
        : null
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ token: string, user: User }>) => {
            const {token, user} = action.payload;
            state.isAuthenticated = true;
            state.token = token;
            state.user = user;

            // Persist to local storage
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = null;
            state.user = null;

            // Clear local storage
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        }
    }
});

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;
