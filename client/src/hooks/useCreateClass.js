import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

export const useCreateClass = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const createClass = async (className, students, yearGroup, teacher) => {
        // const data = {email, password}
        setIsLoading(true);
        setError(null);

        const url = "https://literate-garbanzo-9r4xwvgq5q6c9x49-3030.app.github.dev/classes/create";
        // const url = "http://localhost:3030/classes/create";

        const response = await fetch(url, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                "X-Github-Token": "ghu_VR8qSqRkhHGoYWpxldKABXuWGUObtI3cfsWx"
            },
            body: JSON.stringify({ className, students, yearGroup, teacher })
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
        }
        if (response.ok) {
            // update loading state
            setIsLoading(false);
        }
    }

    return {
        createClass,
        isLoading,
        error
    }
}
