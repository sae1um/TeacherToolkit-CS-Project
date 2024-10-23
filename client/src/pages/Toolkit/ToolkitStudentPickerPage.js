import { useEffect, useState } from "react"
import { TeacherClasses } from "../../helpers/TestClasses"

export default function ToolkitStudentPicker() {
    const [allClasses, setAllClasses] = useState([]);
    const [selectedClass, setSelectedClass] = useState(TeacherClasses[0]);
    const [studentList, setStudentList] = useState([]);

    // Sets teachers classes from db
    // Sets it to the variable allClasses to put in list
    useEffect(() => {
        setAllClasses(TeacherClasses);
    }, []);
    //Shows which class was selected (For debugging)
    useEffect(() => {
        if(selectedClass){
            console.log("Selected class changed to:", selectedClass, selectedClass.students);
        }
    }, [selectedClass])

    // Sets selectedClass to the one chosen in dropdown
    function getSelectClass(e){
        const selectedClassName = e.target.value;
        const foundClass = allClasses.find(itemClass=> itemClass.name === selectedClassName);
        setSelectedClass(foundClass);
    }

    //Class Dropdown Selecter => Students of that classes are loaded up => Remove students from class => randomise => more?
    return(
        <div className="flex h-full justify-center">
            <div className="flex flex-col items-center w-1/2 h- mt-4 p-4 bg-white shadow-lg rounded-lg gap-2">
                <h3 className="font-bold text-2xl">Random Student Picker</h3>
                <select onChange={getSelectClass}>
                    {/* Choice of the teachers class to choose from */}
                    {
                        allClasses.length > 0 ? 
                            allClasses.map((singleClass) => (
                                <option value={singleClass.name} key={singleClass.teacher}>
                                    {singleClass.name}
                                </option>
                            ))
                        :
                        <option value={null}>No class</option>
                    }   
                </select>
                <div className="flex flex-col items-center justify-center mt-2">
                    <h4 className="font-bold text-xl">Students</h4>
                    {/* List of students from the selected class to pick from */}
                    <div className="flex flex-col gap-2">
                        {
                            selectedClass && selectedClass.students.map((student) => (
                                <span key={selectedClass.name}>{student}</span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

function StudentItem({classStudents}){
    return(
        <div>
            Names
        </div>
    )
}