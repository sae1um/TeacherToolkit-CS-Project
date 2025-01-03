import { useEffect, useState } from "react"
import {useAuthContext} from "../../hooks/useAuthContext"
// import { Button } from "@mui/material"
import LoadingButton from '@mui/lab/LoadingButton'
import { useCreateClass } from "../../hooks/useCreateClass"

export default function NewClassModal() {
    const { user } = useAuthContext();
    
    const yrGroupOptions = ["Other", "Year 7", "Year 8", "Year 9", "Year 10", "Year 10", "Year 11", "Year 12", "Year 13"]
    
    const [className, setClassName] = useState("");
    const [students, setStudents] = useState([]);
    const [yearGroup, setYearGroup] = useState("");
    const teacher = user.role === "teacher" ? user.uid : ""; // If user is teacher then set class teacher as uid
    
    const {createClass, isLoading, error} = useCreateClass();

    const handleCreateNewClass = () => {
        createClass(className, students, yearGroup, teacher);
    }

    return(
        <div>
            <p>Create New Class</p>
            <form onSubmit={handleCreateNewClass} className="">
                <div>
                    <label>
                        Class Name
                    </label>
                    <input value={className} onChange={(e) =>  setClassName(e.target.value)} required/>
                </div>
                <div>
                    <label>
                        Year Group
                    </label>
                    <select onChange={(e) => setYearGroup(e.target.value)}>
                        {
                            yrGroupOptions.map((yrg, index) => (
                                <option value={yrg} key={index}>{yrg}</option>
                            ))
                        }
                    </select>
                </div>
                <LoadingButton loading={isLoading} loadingPosition="end" variant="contained" onClick={handleCreateNewClass}>
                    Create Class
                </LoadingButton>
                <div>
                    {
                        error &&
                        <span>
                            {error}
                        </span>
                    }
                </div>
            </form>
        </div>
    )
}