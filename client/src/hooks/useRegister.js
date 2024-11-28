import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

export const useRegister = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const register = async (firstname, lastname, email, password, role, verificationCode) => {
        // const data = {email, password}
        setIsLoading(true);
        setError(null);

        // const url = "https://literate-garbanzo-9r4xwvgq5q6c9x49-3030.app.github.dev/auth/register";
        const url = "http://localhost:3030/auth/register";

        const response = await fetch(url, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                // "X-Github-Token": "ghu_6j0JjB4ZqfKGeh0jOqRD7S2OmfL5AZ0CXAwt"
            },
            body: JSON.stringify({firstname, lastname, email, password, role, verificationCode})
            
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // update the auth context
            dispatch({ type: 'LOGIN', payload: json })

            // update loading state
            setIsLoading(false)
        }
    }

    return {
        register,
        isLoading,
        error
    }
}
