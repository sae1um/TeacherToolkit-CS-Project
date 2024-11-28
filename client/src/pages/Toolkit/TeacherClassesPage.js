import { useState } from "react";

import GridBoxes, { } from "../../components/shared/boxes/GridBoxes"

import { CiCirclePlus } from "react-icons/ci";
import { GoPeople } from "react-icons/go";

import { Button } from "@mui/material"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import NewClassModal from "../../components/forms/NewClassModal";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const classes = [
    { id: 1, name: "Mathematics 101", students: 25, nextClass: "Monday, 10:00 AM" },
    { id: 2, name: "Computer Science Basics", students: 30, nextClass: "Tuesday, 2:00 PM" },
    { id: 3, name: "Physics for Beginners", students: 20, nextClass: "Wednesday, 11:00 AM" }
]


export default function TeacherClassesGrid(params) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleOpen = () => setIsDialogOpen(true);
    const handleClose = () => setIsDialogOpen(false);

    const randomColour = () => {
        const randNum = Math.floor(Math.random() * 7);
        let color = "";

        switch (randNum) {
            case 1:
                color = "blue"
                break;
            case 2:
                color = "red"
                break;
            case 3:
                color = "green";
                break;
            case 4:
                color = "purple";
                break;
            case 5:
                color = "yellow";
                break;
            case 6:
                color = "orange";
                break;
            default:
                color = "red"
                break;
        }
        return color;
    }
    return (
        <div>
            <Modal open={isDialogOpen} onClose={handleClose}>
                <Box sx={style}>
                    <NewClassModal />
                </Box>
            </Modal>
            {classes.length === 0 ? (
                <div className="flex flex-col gap-4 p-10 items-center justify-center font-semibold text-2xl">
                    <p>You have no classes yet</p>
                    <Button onClick={handleOpen} variant="contained"> <span className="text-4xl mx-3 my-2"><CiCirclePlus /></span> Create New Class</Button>
                </div>
            ) : (
                <div className="flex flex-col gap-4 p-10">
                    <div className="flex flex-row justify-between mx-4 items-center">
                        <p className=" font-semibold text-2xl">My Classes</p>
                        <Button onClick={handleOpen} variant="contained"> <span className="text-4xl mx-3 my-2"><CiCirclePlus /></span> Create New Class</Button>
                    </div>
                    <div className="grid gap-4 px-4 md:grid-cols-2 lg:grid-cols-3">
                        {
                            classes.map((cls, index) => (
                                <GridBoxes key={index} name={cls.name} colour={randomColour()} description={[<GoPeople className="" />, cls.students, " Students"]} />
                            ))
                        }
                    </div>
                </div>
            )
            }
        </div>
    )
};
