import { Link } from "react-router-dom";
import toolkitIcon from "../../media/images/toolkit-logo-icon.svg";

export default function OnboardingHeader(){
    return(
        <Link to={"/"}>
            <header className="flex items-center justify-center gap-3 p-3 bg-white shadow-md ">
            <img src={toolkitIcon} className="text-center size-12" alt="Teacher Toolkit Logo" />
            <h1 className="text-2xl font-bold text-center">Teacher Toolkit++</h1>
            </header>
        </Link>
    )
}