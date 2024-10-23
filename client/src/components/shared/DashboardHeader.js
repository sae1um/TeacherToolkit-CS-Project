import { Link } from "react-router-dom";
import toolkitIcon from "../../media/images/toolkit-logo-icon.svg";

export default function DashboardHeader({ link }){
    return(
        <header className="flex items-center bg-white shadow-md stick top-0">
            <Link to={`/home/${link}`} className="flex flex-row items-center gap-3 p-4 pl-5">
                <img src={toolkitIcon} className="text-center size-12" alt="Teacher Toolkit Logo" />
                <h1 className="text-2xl font-bold text-center">Teacher Toolkit++</h1>
            </Link>
        </header>
    )
}