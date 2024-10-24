import { useRef, useEffect } from "react";

export function useAlarmSound(audioSource) {
    const soundRef = useRef();

    // Sets the sound to the soundRef variable
    useEffect(() => {
        soundRef.current = new Audio(audioSource);
    }, []);
    
    // Plays the sound
    const playSound = () => {
        soundRef.current.play();
    };

    // Pauses the sound
    const pauseSound = () => {
        soundRef.current.pause();
    };
    
    // Making the functions accesible outside the file
    return {
        playSound,
        pauseSound
    };
}