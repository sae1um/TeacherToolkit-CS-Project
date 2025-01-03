import { MdTimer } from "react-icons/md";
import "./Timer.css"

export default function Timer({milliseconds, seconds, minutes, hours, changeHours, changeMinutes, changeSeconds}){
    return(
        <div className="flex flex-row items-center justify-center mx-5 mt-8 mb-5 p-10 bg-white rounded-lg drop-shadow-xl gap-3">
            <MdTimer className="text-8xl"/>
            <div className="flex flex-col w-1/6 items-center drop-shadow-md">
                <label className="">hh</label>
                <input 
                    type="number" 
                    min={0} max={24} value={hours} onChange={changeHours} 
                    className={"timerInput"}
                />
            </div>{" "}
            <div className="flex flex-col w-1/6 items-center drop-shadow-md">
                <label className="">mm</label>
                <input 
                    type="number" 
                    min={0} max={60} value={minutes} onChange={changeMinutes} 
                    className={"timerInput"}
                />
            </div>{" "}
            <div className="flex flex-col w-1/6 items-center drop-shadow-md">
                <label className="">ss</label>
                <input 
                    type="number" 
                    min={0} max={60} value={seconds} onChange={changeSeconds} 
                    placeholder="00" className={"timerInput"}
                />
            </div>{" "}
            <div className="flex flex-col w-1/6 items-center drop-shadow-md">
                <label className="">ms</label>
                <input 
                    value={milliseconds} 
                    className={"timerInput"}
                />
            </div>{" "}
        </div>
    )
}