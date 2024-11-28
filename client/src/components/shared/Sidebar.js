import React from "react"
import { Link, useLocation} from "react-router-dom"
import { STUDENT_SIDEBAR_LINK, TEACHER_SIDEBAR_LINK, HOME_LINK} from "../lib/navigation"
import classnames  from "classnames"
import { useLogout } from "../../hooks/useLogout"
import { useAuthContext } from "../../hooks/useAuthContext"

const defaultLinkClass = 'flex flex-row gap-3 items-center px-4 py-2 my-2 font-medium text-center text-[#727272] text-xl hover:bg-slate-200 hover:no-underline hover:rounded-r-xl '
const selectedLinkClass = "flex flex-row gap-3 my-2 items-center px-4 py-2 font-medium text-center text-white text-xl bg-gray-400 rounded-r-xl hover:bg-slate-400 hover:no-underline hover:rounded-r-xl active:bg-gray-300 "

export default function Sidebar(){
    const { user } = useAuthContext();
    const { logout } = useLogout();

    const handleLogout = () => {
        logout();
    }

    return(
        <div className="flex flex-col w-72 h-full bg-white border border-t-slate-300 overflow-hidden">
            {
                user.role === "teacher" ? 
                <div className="flex-1 py-2 pr-4">
                    {TEACHER_SIDEBAR_LINK.map((item) => (
                        <SidebarLink item={item} key={item.key}/>
                    ))}
                    <div>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                </div>
                : user.role === "student" ?
                <div className="flex-1 py-2 pr-4">
                    {STUDENT_SIDEBAR_LINK.map((item) => (
                        <SidebarLink item={item} key={item.key}/>
                    ))}
                    <div>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                </div>
                :
                <div className="flex-1 py-2 pr-4">
                    {
                        HOME_LINK.map((item) => (
                        <SidebarLink item={item} key={item} />
                    ))}
                    <div>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            }
            
        </div>
    )
}

function SidebarLink({ item }){
    const currentPath = useLocation().pathname;
    
    return(
        <Link to={item.path} className={classnames(currentPath === item.path ? selectedLinkClass : defaultLinkClass)}>
            {
                currentPath === item.path ? 
                <span>{item.selectedIcon}</span> : <span>{item.defaultIcon}</span>
            }{item.label}
        </Link>
    )
}