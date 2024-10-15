import DashboardHeader from "../../components/shared/DashboardHeader";
import TeacherSidebar from "../../components/shared/Sidebar";

export default function TeacherDashboard() {
    return(
        <div className="min-h-screen bg-white bg-gradient-to-b from-[#ffc6c7] to-[#f7f7ff]">
            <DashboardHeader link={"teacher"}/>
            <TeacherSidebar role={"teacher"} />
        </div>
    )
};
