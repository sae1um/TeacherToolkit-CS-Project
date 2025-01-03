import { createContext, useContext, useEffect, useState } from "react"
import { useAuthContext } from "../hooks/useAuthContext"

const ClassContext = createContext();

export const useClassContext = () => {
    const context = useContext(ClassContext);

    if(!context){
        throw new Error("useclass context must be in a class context provider");
    }
    return context;
}

export const ClassContextProvider = ({ children }) => {
    const { user } = useAuthContext();

    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);

    const url = `https://literate-garbanzo-9r4xwvgq5q6c9x49-3030.app.github.dev/classes/get-all?teacherId=${user.uid}`;
    // const url = "http://localhost:3030/classes/get-all";
    
    useEffect(() => {
        const fetchClasses = async () => {
            if(user){
                try{
                    const response = await fetch(url, {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                            "X-Github-Token": "ghu_VR8qSqRkhHGoYWpxldKABXuWGUObtI3cfsWx"
                        }
                    });
                    const json = await response.json();
                    setClasses(json.data); //Assuming data is an array

                }catch(err){
                    console.error("Failed to fetch classes ", err);
                }finally{
                    setLoading(false);
                }
            }else{
                setClasses([]);
                setLoading(false);
            }
        }
        fetchClasses();
    }, [user]);

    return(
        <ClassContext.Provider value={{classes, setClasses, loading}}>
            {children}
        </ClassContext.Provider>
    )
}