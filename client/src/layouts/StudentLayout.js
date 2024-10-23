import { Outlet } from "react-router-dom";
import DashboardHeader from "../components/shared/DashboardHeader";
import Sidebar from "../components/shared/Sidebar";

export default function StudentLayout({ gridPage }) {
    return(
        <div className="h-screen bg-white bg-gradient-to-b from-[#ffc6c7] to-[#f7f7ff] overflow-hidden">
            <DashboardHeader link={"student"}/>
            <div className="flex flex-row h-full">
                <Sidebar role={"student"} />
                <main className="flex-1">
                    <Outlet />
                </main>
            </div>   
        </div>
    )
};
