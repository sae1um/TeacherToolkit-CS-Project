import { useEffect, useState } from "react"
import { TeacherClasses } from "../../helpers/TestClasses"
import Button from "@mui/material/Button"
import { TailSpin } from "react-loader-spinner"

export default function ToolkitStudentPicker() {
    // Classes
    const [allClasses, setAllClasses] = useState([]); // All the classes imported from the database
    const [selectedClass, setSelectedClass] = useState(TeacherClasses[0]); // The class selected from the dropdown

    // Students from the selected class
    const [studentList, setStudentList] = useState([]); // List of students from the class
    const [chosenStudent, setChosenStudent] = useState(""); // Student that is chosen from the randomiser

    // Set loading state
    const [choosingStudenLoading, setChoosingStudentLoading] = useState(false);

    /* USE EFFECT HOOKS */
    // Sets all the available classes in to the varaible used to render dropdown list
    useEffect(() => {
        setAllClasses(TeacherClasses);
    }, []);

    // Sets the array when selectedClass changes
    useEffect(() => {
        setStudentList(selectedClass.students);
    }, [selectedClass]);

    /* FUNCTIONS */
    // Sets selectedClass variable to the one chosen in dropdown
    function getSelectClass(e) {
        setChosenStudent("");
        const selectedClassName = e.target.value;
        const foundClass = allClasses.find(itemClass => itemClass.name === selectedClassName);
        setSelectedClass(foundClass);
    }

    // Choosing Random Student:
    function chooseRandomStudent() {
        if (studentList.length <= 0) {
            alert("No students in list \nReload the list or choose another class");
            return;
        }
        // 1. Starts the loading spinner animation
        setChoosingStudentLoading(true);
        // 2. Chooses a random number
        let randomNum = Math.floor(Math.random() * studentList.length)
        setTimeout(() => {
            setChoosingStudentLoading(false);
            // 3. Finds the student from the random number 
            setChosenStudent(studentList[randomNum]);
        }, 1000); // 4. After 1s the spinner stops and the name shows up
    }

    // Removes the chosen student from the list
    function removePickedStudent() {
        if (studentList.length <= 0) {
            alert("No students in list \nReload the list or choose another class");
            return;
        } else if (!chosenStudent) {
            alert("No student picked \nCannot remove a student");
            return
        }
        const studentToRemove = chosenStudent;
        const tempStudentList = studentList.filter(student => student !== studentToRemove);

        // Update the rendered list
        setStudentList(tempStudentList);
        // Resets the chosen student
        setChosenStudent("");
    }

    //Class Dropdown Selecter => Students of that classes are loaded up => Remove students from class => randomise => Remove student or Clear Student
    return (
        <div className="flex h-full justify-center">
            <div className="flex flex-col items-center w-1/2 h- mt-4 p-4 bg-white shadow-lg rounded-lg gap-2">
                <h3 className="font-bold text-2xl">Random Student Picker</h3>
                <div className="flex flex-row gap-2">
                    <p className="font-bold">Choose your Class:</p>
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
                </div>
                {/*  */}
                <div className="flex flex-row w-full justify-between p-4">
                    {/* List of students from the selected class to pick from */}
                    <div className="flex items-center justify-center flex-col w-1/3 bg-slate-200 border border-slate-500 p-5 rounded-md">
                        <h4 className="font-bold text-xl w-full text-center border border-b-slate-500 pb-2 mb-3">Choices</h4>
                        {
                            studentList && (
                                <ul className="flex flex-col gap-2">
                                    {studentList.map((student, index) => (
                                        <li key={index} className="text-center">{student}</li>
                                    ))}
                                </ul>
                            )
                        }
                        <Button onClick={() => setStudentList(selectedClass.students)} variant="outlined">Reload List</Button>
                    </div>
                    <Button onClick={chooseRandomStudent} variant="contained" className="h-10 self-center" >Pick Student</Button>
                    <div className="flex justify-center items-stretch flex-col w-1/3 bg-slate-200 border border-slate-500 p-5 rounded-md">
                        <h4 className="font-bold text-xl w-full text-center border border-b-slate-500 pb-2 mb-3">Chosen</h4>
                        <div className="flex items-center justify-center mb-4">
                            {
                                choosingStudenLoading ?
                                    <TailSpin
                                        visible={true}
                                        height="40"
                                        width="40"
                                        color="#ff8587"
                                        ariaLabel="tail-spin-loading"
                                        radius="1"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                    /> : <span className="text-center p-2 m-1"> {chosenStudent} </span>
                            }
                        </div>
                        <div className="flex flex-row gap-2">
                            <Button variant="outlined" onClick={() => setChosenStudent("")} >Clear</Button>
                            <Button variant="outlined" onClick={removePickedStudent} color="error">Remove Student</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
