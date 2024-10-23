import { useRef, useEffect } from "react";

export function useAlarmSound(audioSource) {
    const soundRef = useRef();

    useEffect(() => {
        soundRef.current = new Audio(audioSource);
    }, []);

    const playSound = () => {
        soundRef.current.play();
    };

    const pauseSound = () => {
        soundRef.current.pause();
    };

    return {
        playSound,
        pauseSound
    };
}