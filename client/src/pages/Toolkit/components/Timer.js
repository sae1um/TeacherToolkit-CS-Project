import { MdTimer } from "react-icons/md";

export default function Timer({milliseconds, seconds, minutes, hours, changeHours, changeMinutes, changeSeconds}){
    return(
        <div className="flex flex-row items-center justify-center mx-5 mt-8 mb-5 p-10 bg-white rounded-lg drop-shadow-xl gap-3">
            <MdTimer className="text-8xl"/>
            <div className="flex flex-col w-1/6 items-center drop-shadow-md">
                <label className="">hh</label>
                <input value={hours} onChange={changeHours} className="w-16 bg-slate-400 rounded-lg text-center text-2xl font-extrabold p-1"/>
            </div>{" "}
            <div className="flex flex-col w-1/6 items-center drop-shadow-md">
                <label className="">mm</label>
                <input value={minutes} onChange={changeMinutes} className="w-16 bg-slate-400 rounded-lg text-center text-2xl font-extrabold p-1"/>
            </div>{" "}
            <div className="flex flex-col w-1/6 items-center drop-shadow-md">
                <label className="">ss</label>
                <input value={seconds} onChange={changeSeconds} placeholder="00" className="w-16 bg-slate-400 rounded-lg text-center text-2xl font-extrabold p-1"/>
            </div>{" "}
            <div className="flex flex-col w-1/6 items-center drop-shadow-md">
                <label className="">ms</label>
                <input value={milliseconds} className="w-16 bg-slate-400 rounded-lg text-center text-2xl font-extrabold p-1"/>
            </div>{" "}
        </div>
    )
}