import { SlBookOpen } from "react-icons/sl";
import GridBoxes from "../../shared/boxes/GridBoxes";
import { FaDice, FaChalkboardTeacher } from "react-icons/fa";
import { MdTimer, MdOutlineQuiz } from "react-icons/md";
import { HiSpeakerphone } from "react-icons/hi";

export default function TeacherToolkitGrid() {
    return(
        <div>
            <div className="grid grid-cols-2 gap-4 px-4 ">
                <GridBoxes name={"Random Student Picker"} description={"Select a student at random from your classroom"} icon={<FaDice />} colour={"blue"} link={"student-picker"}/>
                <GridBoxes name={"Timer/Countdown"} description={"Set timers or start countdown for activities"} icon={<MdTimer />} colour={"red"} link={"timer"}/>
                <GridBoxes name={"Whiteboard"} description={"Collaborate with students to jot down ideas"} icon={<FaChalkboardTeacher />} colour={"purple"} link={"whiteboard"}/>
                <GridBoxes name={"Quiz Maker"} description={"Create quizzes for your students"} icon={<MdOutlineQuiz />} colour={"yellow"} link={"quiz-maker"}/>
                <GridBoxes name={"Assignment Manager"} description={"Manage student assignments and homework"} icon={<SlBookOpen />} colour={"green"} link={"assignments"}/>
                <GridBoxes name={"Urgent Notices"} description={"Create notices for one or all your classes"} icon={<HiSpeakerphone />} colour={"orange"} link={"notices"}/>
            </div>
        </div>
    )
};
