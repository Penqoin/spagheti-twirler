import { useEffect, useRef, useState } from "react";
import { useGameContext } from "../context/GameContext";

import { GameInputs, InputKeys } from "../types";

interface GameLogic {
    currentKey: InputKeys | null;
}
interface GameLogicProps {
    keypress: null | KeyboardEvent;
}


const useGameLogic = ({
    keypress
}: GameLogicProps): GameLogic=> {
    const {
        registerPlayerHit,
        registerPlayerMiss,
        gameSettings,
        GAME_INPUTS,
    } = useGameContext();

    const [currentKey, setCurrentKey] = useState<InputKeys | null>(null)

    const requestRef = useRef<number>(0);
    let prevTime = 0;

    useEffect(() => {
        if (gameSettings.isRunning) {
            prevTime = Date.now();
            requestAnimationFrame(mainLoop);
        }
    }, [gameSettings])

    // update key
    useEffect(() => {
        if (currentKey === null) {
            const key = Math.ceil(Math.random() * 4);
            switch (key) {
                case 1:
                    setCurrentKey('up')
                    break;
                case 2:
                    setCurrentKey('down')
                    break;
                case 3:
                    setCurrentKey('left')
                    break;
                default: 
                    setCurrentKey('right')
            }
        }
    }, [currentKey])

    // detect player input
    useEffect(() => {
        if (keypress === null) return;

        const input = GAME_INPUTS[keypress.key as keyof GameInputs];
        // check if player 1 has missed or hit
        if (input !== undefined && input !== currentKey) {
            if (keypress.key.length === 1)
                registerPlayerMiss(0)
            else
                registerPlayerMiss(1)
        }
        
        if (input === currentKey) {
            if (keypress.key.length === 1)
                registerPlayerHit(0)
            else 
                registerPlayerHit(1)
        }
        setCurrentKey(null)
    }, [keypress])
    
    
    const mainLoop = () => {
        const timeElapsed = Date.now() - prevTime;

        if (timeElapsed >= gameSettings.duration) {
            if (requestRef.current !== null)
                cancelAnimationFrame(requestRef.current);
            return;
        }

        updateGame();
        requestRef.current = requestAnimationFrame(mainLoop);
    }

    const updateGame = () => {

    }

    return {
        currentKey
    }
}

export default useGameLogic;
