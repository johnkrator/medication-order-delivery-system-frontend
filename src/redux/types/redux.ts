export interface RootState {
    user: {
        isAuthenticated: boolean;
        token?: string;
        user?: {
            id: string;
            email: string;
            roles: string[];
        };
    };
}
