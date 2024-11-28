import { useEffect, useState } from "react"
import {useAuthContext} from "../../hooks/useAuthContext"

export default function NewClassModal() {
    const { user } = useAuthContext();
    
    const [className, setClassName] = useState("");
    const [classStudents, setClassStudents] = useState([]);
    const [teacher, setTeacher] = useState(user.uid);

    const handleCreateNewClass = () => {
        
    }

    return(
        <div>
            <p>Create New Class</p>
            <form>
                <div>
                    <label>
                        Class Name
                    </label>
                    <input value={className} onChange={(e)}/>
                </div>
            </form>
        </div>
    )
}