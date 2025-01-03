import { createContext, useReducer, useEffect } from "react"

// Create a context for authentication
export const AuthContext = createContext();

// Define a reducer function to manage authentication state
export const authReducer = (state, action) => {
    switch (action.type){
        case "LOGIN":
            // Update the state with the logged-in user's data
            return { user: action.payload }
        case "LOGOUT":
            // Reset the state to indicate no user is logged in
            return { user: null }
        default:
            // Return the current state for unrecognized actions
            return state
    }
}

// Define a context provider component for authentication
export const AuthContextProvider = ({children}) => {
     // Initialize state with useReducer, passing the reducer and initial state
    const [state, dispatch] = useReducer(authReducer, {
        user: null // Initial state has no user logged in
    })  

    // load user data from localStorage on component mount
    useEffect(() => {
        // Retrieve the user data from localStorage
        const user = JSON.parse(localStorage.getItem("user"));
        if(user){
            // send a LOGIN action to update the state if user data exists
            dispatch({type: "LOGIN", payload: user});
        }
    }, [])

    console.log("AuthContext State:", state);

    // Wrap children components with the AuthContext.Provider
    // Provide the state and dispatch function to allow child components to access or modify the auth state
    return(
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}