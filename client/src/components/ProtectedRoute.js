import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import LoginPage from "./onboarding/Login";
import RegisterPage from "./onboarding/Signup";

export default function ProtectedRoute({ children, path }) {
    const { user } = useAuthContext(); // Get current user from auth context

    if(!user){
        if(path === "register"){
            return <RegisterPage />;
        }
        return <LoginPage />;
    }

    // If a user exists, render the child component /home/role
    return children;
}
