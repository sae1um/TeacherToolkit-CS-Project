import React, { useState, useEffect } from "react";
import Timer from "./components/Timer";
import { BsPlayFill, BsPauseFill, BsStopFill } from "react-icons/bs"
import { IconContext } from "react-icons";
import AlarmSound from "../../media/sounds/Audio-Alarm-2.mp3"
import {useAlarmSound} from "../../helpers/alarmSound"

export default function ToolkitTimerPage() {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [milliseconds, setMilliseconds] = useState(0);
    const [isRunning, setIsRunning] = useState(null);
    const [showEndScreen, setShowEndScreen] = useState({
        show: false,
        message: "Timer Ended"
    })

    const { playSound } = useAlarmSound(AlarmSound);

    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                if (milliseconds > 0) {
                    setMilliseconds((milliseconds) => milliseconds - 1);
                } else if (seconds > 0) {
                    setSeconds((seconds) => seconds - 1);
                    setMilliseconds(99);
                } else if (minutes > 0) {
                    setMinutes((minutes) => minutes - 1);
                    setSeconds(59);
                    setMilliseconds(99);
                } else if (hours > 0) {
                    setHours((hours) => hours - 1);
                    setMinutes(59);
                    setSeconds(59);
                    setMilliseconds(99);
                }
            }, 10);
        }
        if(hours === 0 && minutes === 0 && seconds === 0 && milliseconds === 1){
            setShowEndScreen({...showEndScreen, show: true});
            resetTimer();
            playSound();
        }
        return () => clearInterval(interval);
    }, [milliseconds, seconds, minutes, hours, isRunning, showEndScreen.show]);

    // Functions
    function startTimer(){
        if(hours !== 0 || minutes !== 0 || seconds !== 0 || milliseconds !==0){
            setIsRunning(true);
            setShowEndScreen({...showEndScreen, show: false});
        }else{
            window.alert("Add Time.");
        }
    }

    function pauseTimer(){
        setIsRunning(false);
    }

    function stopTimer(){
        resetTimer();
        setShowEndScreen({...showEndScreen, show: false});
    }

    function resetTimer(){
        setIsRunning(false);
        setMilliseconds(0);
        setSeconds(0);
        setMinutes(0);
        setHours(0);
    }
    // Handlers
    const changeHours = (e) => {
        setHours(e.target.value);
    };
    const changeMinutes = (e) => {
        setMinutes(e.target.value);
    };
    const changeSeconds = (e) => {
        setSeconds(e.target.value);
    };

    return (
        <div className="flex flex-col items-center justify-center m-4">
            {showEndScreen.show &&  <h1>{showEndScreen.message}</h1>}
            <Timer
                milliseconds={milliseconds}
                seconds={seconds}
                minutes={minutes}
                hours={hours}
                changeHours={changeHours}
                changeMinutes={changeMinutes}
                changeSeconds={changeSeconds}
            />
            <div className="flex flex-row gap-4">
                {!isRunning && (
                    <button
                        onClick={startTimer} 
                        className="bg-blue-700 px-2 py-1 rounded-lg">
                            <IconContext.Provider value={{ color: "white" }}>
                                <BsPlayFill className="text-4xl" />
                            </IconContext.Provider>
                    </button>
                )}
                {isRunning && (
                    <button
                        onClick={pauseTimer}
                        className="bg-yellow-500 px-2 py-1 rounded-lg">
                            <IconContext.Provider value={{ color: "white" }}>
                                <BsPauseFill className="text-4xl" />
                            </IconContext.Provider>
                    </button>
                )}
                <button
                    onClick={stopTimer} 
                    className="bg-red-600 px-2 py-1 rounded-lg" >
                        <IconContext.Provider value={{ color: "white" }}>
                            <BsStopFill className="text-4xl"/>
                        </IconContext.Provider>
                </button>
            </div>
        </div>
    );
}
