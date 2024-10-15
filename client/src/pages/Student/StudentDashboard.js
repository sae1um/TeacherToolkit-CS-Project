import DashboardHeader from "../../components/shared/DashboardHeader";
import TeacherSidebar from "../../components/shared/Sidebar";
import TeacherDashboard from "../Teacher/TeacherDashboard";

export default function StudentDashboard() {
    return(
        <div className="min-h-screen bg-white bg-gradient-to-b from-[#ffc6c7] to-[#f7f7ff]">
            <DashboardHeader link={"student"} />
            <TeacherSidebar role={"student"} />
        
        </div>
    )
};
