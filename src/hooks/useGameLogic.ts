import { useEffect, useRef, useState } from "react";
import { useGameContext } from "../context/GameContext";

import { GameInputs, InputKeys } from "../types";

interface GameLogicProps {
    currentKey: InputKeys | null
}

const useGameLogic = (): GameLogicProps => {
    const {
        registerPlayerHit,
        registerPlayerMiss,
        gameSettings,
        GAME_INPUTS,
    } = useGameContext();

    const requestRef = useRef<number>(0);
    let prevTime = 0;
    let currentKey: InputKeys | null = null

    const [hasPressed, setHasPressed] = useState<boolean>(false);
    
    useEffect(() => {
        if (gameSettings.isRunning) {
            prevTime = Date.now();
            window.addEventListener('keydown', handlePlayerInputs);

            requestAnimationFrame(mainLoop);
        }
    }, [gameSettings])
    
    const mainLoop = () => {
        const timeElapsed = Date.now() - prevTime;
        console.log(timeElapsed)

        if (timeElapsed >= gameSettings.duration) {
            if (requestRef.current !== null)
                cancelAnimationFrame(requestRef.current);
            window.removeEventListener('keydown', handlePlayerInputs);
            return;
        }

        updateGame();
        console.log(currentKey)
        requestRef.current = requestAnimationFrame(mainLoop);
    }

    const updateGame = () => {
        updateKey();
    }

    const updateKey = () => {
        if (hasPressed) {
            setHasPressed(false);
            currentKey = null;
        } else if (currentKey === null) {
            const key = Math.ceil(Math.random() * 4);
            switch (key) {
                case 1:
                    currentKey = "up";
                    break;
                case 2:
                    currentKey = "down";
                    break;
                case 3:
                    currentKey = "left";
                    break;
                default: 
                    currentKey = "right";
            }
        }
    }

    const handlePlayerInputs = (e: KeyboardEvent) => {
        if (GAME_INPUTS[e.key.toLowerCase() as keyof GameInputs] === currentKey) {
            setHasPressed(true);
            console.log('player1 scored')
        } else if (GAME_INPUTS[e.key as keyof GameInputs] === currentKey) {
            setHasPressed(true);
            console.log('player 2 scored')
        }
    }

    return {
        currentKey
    }
}

export default useGameLogic;
