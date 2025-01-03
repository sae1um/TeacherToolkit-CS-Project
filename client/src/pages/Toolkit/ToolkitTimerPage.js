import React, { useState, useEffect } from "react";
import Timer from "./components/Timer";
import { BsPlayFill, BsPauseFill, BsStopFill } from "react-icons/bs"
import { IconContext } from "react-icons";
import AlarmSound from "../../media/sounds/Audio-Alarm-2.mp3"
import {useAlarmSound} from "../../helpers/alarmSound"

export default function ToolkitTimerPage() {
    // State variables for time management    
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [milliseconds, setMilliseconds] = useState(0);

    // State variables for timer controls
    const [isRunning, setIsRunning] = useState(null);
    const [showEndScreen, setShowEndScreen] = useState({
        show: false,
        message: "Timer Ended"
    })
    
    // Importing the playSound function from another file
    const { playSound } = useAlarmSound(AlarmSound);

    /*
     * useEffect for timer countdown functionality.
     * Runs every time milliseconds, seconds, minutes, hours, or isRunning state changes.
     */
    useEffect(() => {
        let interval;

        // If the timer is running, decrement the time
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
            }, 10); // Runs every 10 milliseconds 
        }

        // When the timer reaches zero, show the end screen and reset the timer
        if(hours === 0 && minutes === 0 && seconds === 0 && milliseconds === 1){
            setShowEndScreen({...showEndScreen, show: true});
            resetTimer();
            playSound();
        }
        return () => clearInterval(interval);
    }, [milliseconds, seconds, minutes, hours, isRunning, showEndScreen.show]);

    // Function that starts the timer
    function startTimer(){
        if(hours !== 0 || minutes !== 0 || seconds !== 0 || milliseconds !== 0){
            // if input number is bigger than max then set to max
            if(hours > 24){setHours(24)}
            if(minutes > 60){setMinutes(60)}
            if(seconds > 60){setSeconds(60)}
            setIsRunning(true);
            setShowEndScreen({...showEndScreen, show: false});
        }else if(hours < 0 || minutes < 0 || seconds < 0 || milliseconds < 0){
            // Alert when negative
            window.alert("Time cannot be negative!")
        }else{
            window.alert("Add a Time.");
        }
    }

    // Function that pauses the timer
    function pauseTimer(){
        setIsRunning(false);
    }

    function stopTimer(){
        resetTimer();
        setShowEndScreen({...showEndScreen, show: false});
    }

    // Function that stops the timer and resets all values to 0
    function resetTimer(){
        setIsRunning(false);
        setMilliseconds(0);
        setSeconds(0);
        setMinutes(0);
        setHours(0);
    }

    // Event handlers for updating hours, minutes, and seconds from user input
    const changeHours = (e) => {
        setHours(e.target.value);
    };
    const changeMinutes = (e) => {
        setMinutes(e.target.value);
    };
    const changeSeconds = (e) => {
        setSeconds(e.target.value);
    };

    // Rendering time and controls
    return (
        <div className="flex flex-col items-center justify-center m-4">
            {/* Show the end message when the timer reaches zero */}
            {showEndScreen.show && <h1>{showEndScreen.message}</h1>}
            {/* Timer display and input fields */}
            <Timer
                milliseconds={milliseconds}
                seconds={seconds}
                minutes={minutes}
                hours={hours}
                changeHours={changeHours}
                changeMinutes={changeMinutes}
                changeSeconds={changeSeconds}
            />
            {/* Control buttons: Start, Pause, Stop */}
            <div className="flex flex-row gap-4">
                {/* Conditionally render the Start button if timer is not running */}
                {!isRunning && (
                    <button
                        onClick={startTimer}
                        className="bg-blue-700 px-2 py-1 rounded-lg">
                        <IconContext.Provider value={{ color: "white" }}>
                            <BsPlayFill className="text-4xl" />
                        </IconContext.Provider>
                    </button>
                )}
                {/* Conditionally render the Pause button if timer is running */}
                {isRunning && (
                    <button
                        onClick={pauseTimer}
                        className="bg-yellow-500 px-2 py-1 rounded-lg">
                        <IconContext.Provider value={{ color: "white" }}>
                            <BsPauseFill className="text-4xl" />
                        </IconContext.Provider>
                    </button>
                )}
                {/* Stop button, always visible */}
                <button
                    onClick={stopTimer}
                    className="bg-red-600 px-2 py-1 rounded-lg">
                    <IconContext.Provider value={{ color: "white" }}>
                        <BsStopFill className="text-4xl" />
                    </IconContext.Provider>
                </button>
            </div>
        </div>
    );
}
