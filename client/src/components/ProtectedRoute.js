import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import LoginPage from "./onboarding/Login";
import RegisterPage from "./onboarding/Signup";

export default function ProtectedRoute({ children, path }) {
    const { user } = useAuthContext(); // Get current user from auth context

    // If no user then redirect to login or register page
    if(!user){
        if(path === "register"){
            return <RegisterPage />;
        }
        return <LoginPage />;
    }

    // If a user exists, render the child component /home/role
    // if(user.role === "student"){
    //     return children;
    // }else if(user.role === "teacher"){
    //     return children;
    // }
    return children;
}
