import { useEffect, useState } from "react"

import { GameSettings, InputKeys, Player } from "../types"


interface SpaghettiGameLogicProps {

}

interface SpaghettiGameLogic {
    players: [Player, Player];
    currentKey: InputKeys | null;
    startGameLoop: () => void;
}

const useSpaghettiGameLogic = (): SpaghettiGameLogic => {
    const [players, setPlayers] = useState<[Player, Player]>([
        {
            points: 0,
            hits: 0,
            misess: 0
        },
        {
            points: 0,
            hits: 0,
            misess: 0
        }
    ]);
    const [currentKey, setCurrentkey] = useState<InputKeys | null>(null)
    const [gameSettings, setGameSettings] = useState<GameSettings>({
        duration: 60 * 1000, // 1 minute in ms
        fps: 60,
        interval: 1000 / 60,
        gameRunning: false
    })
    
    const startGameLoop = () => {
        const startTime = Date.now();
        window.addEventListener('keydown', handlePlayerInputs);

        const gameLoop = setInterval(() => {
            const currTime = Date.now();
            const elapsedTime = currTime - startTime;
            
            if (elapsedTime >= gameSettings.duration) {
                clearInterval(gameLoop);
                return;
            }

            update();
        }, gameSettings.interval)

        window.removeEventListener('keydown', handlePlayerInputs);
    }

    const update = () => {
        // set the next key to be pressed
        if (currentKey === null) {
            getNextKey();
        }
    }

     const getNextKey = () => {
        setCurrentkey(() => {
            const key = Math.ceil(Math.random() * 4);
            switch (key) {
                case 1:
                    return "up";
                case 2:
                    return "down";
                case 3:
                    return "left";
                default: 
                    return "right";
            }
        });
    };


    const handlePlayerInputs = (e: KeyboardEvent) => {
        if (!gameSettings.gameRunning) return;

    }


    return {
        players,
        currentKey,
        startGameLoop
    }
}

export default useSpaghettiGameLogic;
