import { Outlet } from "react-router-dom";
import DashboardHeader from "../components/shared/DashboardHeader";
import Sidebar from "../components/shared/Sidebar";
import TeacherToolkitGrid from "../components/grids/teacher/TeacherToolkitGrid";

export default function TeacherToolkitLayout() {
    return(
        <div className="h-screen bg-white bg-gradient-to-b from-[#ffc6c7] to-[#f7f7ff] overflow-hidden">
            <DashboardHeader  link={"teacher"}/>
            <div className="flex flex-row h-full">
                <Sidebar role={"teacher"}/>
                <main className="flex-1">
                    <TeacherToolkitGrid />
                    <Outlet />  
                </main>
            </div>   
        </div>
    )
};
