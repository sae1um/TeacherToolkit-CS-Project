import { CgProfile } from "react-icons/cg"
import Button from "@mui/material/Button"
import { useAuthContext } from "../../../hooks/useAuthContext"
import { useEffect } from "react"

export default function TeacherHomeGrid() {
    const { user } = useAuthContext();

    useEffect(() => {
        console.log(user);
    })
    return(
        <div className="grid grid-cols-4 grid-rows-5 gap-4 p-2 text-xl font-medium text-gray-600">
            <div className="flex flex-row col-span-4 row-span-1 bg-white rounded-md">
                {/* PfP */}
                <div><CgProfile /></div>
                <div className="flex flex-col">
                    <span>{[user.firstname, " ", user.lastname]}</span>
                    <span className="font-normal text-lg">Teacher</span>
                </div>
                <Button>Edit Profile</Button>
            </div>
            <div className="col-span-2 row-span-2 bg-white rounded-md">
                Classes Grid
            </div>
            <div className="col-span-2 row-span-2 bg-white rounded-md">
                Assignments Grid
            </div>
            <div className="col-span-2 row-span-1 bg-white rounded-md">
                Quick Quiz Grid
            </div>
        </div>
    )
};
