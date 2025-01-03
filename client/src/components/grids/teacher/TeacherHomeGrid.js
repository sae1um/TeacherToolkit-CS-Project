import React from 'react'
import { FaEdit, FaPlus, FaPlay } from 'react-icons/fa'
import { useAuthContext } from "../../../hooks/useAuthContext"

const classes = [
    { time: "9:00 AM", name: "Mathematics 101", room: "Room 204" },
    { time: "11:00 AM", name: "Physics", room: "Room 305" },
    { time: "2:00 PM", name: "Chemistry", room: "Lab 101" },
]

const assignments = [
    { class: "Mathematics 101", title: "Quadratic Equations", dueDate: "2024-01-05" },
    { class: "Physics", title: "Newton's Laws", dueDate: "2024-01-06" },
    { class: "Chemistry", title: "Periodic Table", dueDate: "2024-01-07" },
]

export default function TeacherHomeGrid() {
    const { user } = useAuthContext();

    return (
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="grid grid-cols-4 grid-rows-5 gap-6">
                {/* Teacher Info */}
                <div className="col-span-4 bg-white shadow rounded-lg p-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="h-16 w-16 rounded-full bg-gray-300"></div>
                        <div>
                            <h2 className="text-2xl font-bold">{[user.firstname, " ", user.lastname]}</h2>
                            <p className="text-gray-600">{[user.role.charAt(0).toUpperCase(), user.role.slice(1)]}</p>
                        </div>
                    </div>
                    <button className="px-4 py-2 border rounded-md flex items-center text-gray-700 hover:bg-gray-100">
                        <FaEdit className="mr-2" />
                        Edit Profile
                    </button>
                </div>

                {/* Classes Grid */}
                <div className="col-span-2 row-span-2 bg-white shadow rounded-lg p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">Today's Classes</h3>
                        <a href="/classes" className="text-blue-600 hover:underline text-sm">View All Classes</a>
                    </div>
                    <table className="w-full">
                        <thead>
                            <tr className="text-left text-gray-600">
                                <th className="pb-2">Time</th>
                                <th className="pb-2">Class</th>
                                <th className="pb-2">Room</th>
                            </tr>
                        </thead>
                        <tbody>
                            {classes.map((class_, index) => (
                                <tr key={index} className="border-t">
                                    <td className="py-2">{class_.time}</td>
                                    <td className="py-2">{class_.name}</td>
                                    <td className="py-2">{class_.room}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Assignments Grid */}
                <div className="col-span-2 row-span-2 bg-white shadow rounded-lg p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">Upcoming Assignments</h3>
                        <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm flex items-center">
                            <FaPlus className="mr-1" />
                            Create Assignment
                        </button>
                    </div>
                    <table className="w-full">
                        <thead>
                            <tr className="text-left text-gray-600">
                                <th className="pb-2">Class</th>
                                <th className="pb-2">Assignment</th>
                                <th className="pb-2">Due Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {assignments.map((assignment, index) => (
                                <tr key={index} className="border-t">
                                    <td className="py-2">{assignment.class}</td>
                                    <td className="py-2">{assignment.title}</td>
                                    <td className="py-2">{assignment.dueDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Quick Quiz Grid */}
                <div className="col-span-4 row-span-2 bg-white shadow rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Create Quick Quiz</h3>
                    <div className="grid grid-cols-4 gap-4">
                        <input className="col-span-1 p-2 border rounded" placeholder="Subject" />
                        <input className="col-span-1 p-2 border rounded" placeholder="Topic" />
                        <input className="col-span-1 p-2 border rounded" placeholder="Quiz PIN" />
                        <button className="col-span-1 bg-green-600 text-white p-2 rounded flex items-center justify-center">
                            <FaPlay className="mr-2" />
                            Start Quiz
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
};
