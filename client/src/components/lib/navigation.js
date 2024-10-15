import { SlHome, SlBookOpen } from "react-icons/sl";
import { LiaToolsSolid } from "react-icons/lia";
import { SiGoogleclassroom } from "react-icons/si";
import { MdOutlineQuiz } from "react-icons/md";
import { IconContext } from "react-icons";

export const TEACHER_SIDEBAR_LINK = [
	{
		key: 'home',
		label: 'Home',
		path: '/home/teacher',
		defaultIcon: <SlHome/>,
		selectedIcon: <IconContext.Provider value={{color: "white"}}><SlHome/></IconContext.Provider>
	},
	{
		key: "tools",
		label: "Toolkit",
		path: "/home/teacher/toolkit",
		defaultIcon: <LiaToolsSolid />,
		selecetedIcon: <IconContext.Provider value={{color: "white"}}><LiaToolsSolid /></IconContext.Provider>
	},
	{
		key: "classes",
		label: "Classes",
		path: "/home/teacher/classes",
		defaultIcon: <SiGoogleclassroom />,
		selecetedIcon: <IconContext.Provider value={{color: "white"}}><SiGoogleclassroom /></IconContext.Provider>
	},
	{
		key: "assignments",
		label: "Assignments",
		path: "/home/teacher/assignments",
		defaultIcon: <SlBookOpen />,
		selecetedIcon: <IconContext.Provider value={{color: "white"}}><SlBookOpen /></IconContext.Provider>
	},
	{
		key: "quiz",
		label: "Quiz Maker",
		path: "/home/teacher/quiz-maker",
		defaultIcon: <MdOutlineQuiz />,
		selecetedIcon: <IconContext.Provider value={{color: "white"}}><MdOutlineQuiz /></IconContext.Provider>
	}
]

export const STUDENT_SIDEBAR_LINK = [
	{
		key: 'home',
		label: 'Home',
		path: '/home/student',
		defaultIcon: <SlHome/>,
		selectedIcon: <IconContext.Provider value={{color: "white"}}><SlHome/></IconContext.Provider>
	},
	{
		key: "tools",
		label: "Toolkit",
		path: "/home/student/toolkit",
		defaultIcon: <LiaToolsSolid />,
		selecetedIcon: <IconContext.Provider value={{color: "white"}}><LiaToolsSolid /></IconContext.Provider>
	},
	{
		key: "classes",
		label: "Classes",
		path: "/home/student/classes",
		defaultIcon: <SiGoogleclassroom />,
		selecetedIcon: <IconContext.Provider value={{color: "white"}}><SiGoogleclassroom /></IconContext.Provider>
	},
	{
		key: "assignments",
		label: "Assignments",
		path: "/home/student/assignments",
		defaultIcon: <SlBookOpen />,
		selecetedIcon: <IconContext.Provider value={{color: "white"}}><SlBookOpen /></IconContext.Provider>
	},
	{
		key: "quiz",
		label: "Quiz Menu",
		path: "/home/student/join-quiz",
		defaultIcon: <MdOutlineQuiz />,
		selecetedIcon: <IconContext.Provider value={{color: "white"}}><MdOutlineQuiz /></IconContext.Provider>
	}
]

export const HOME_LINK = [
	{
		key: 'home',
		label: 'Home',
		path: '/',
		defaultIcon: <SlHome/>,
		selectedIcon: <IconContext.Provider value={{color: "white"}}><SlHome/></IconContext.Provider>
	}
]