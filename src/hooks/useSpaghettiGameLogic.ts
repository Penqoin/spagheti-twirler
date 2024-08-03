import { useEffect, useRef, useState } from "react"

import { GameSettings, InputKeys, Player } from "../types"


interface SpaghettiGameLogicProps {

}

interface SpaghettiGameLogic {
    players: [Player, Player];
    currentKey: InputKeys | null;
    changeGameRunning: () => void;
}

const useSpaghettiGameLogic = (): SpaghettiGameLogic => {
    const requestRef = useRef<number>(0);
    const startTime = useRef<number>(0);

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
    const [playerHitKey, setPlayerHitKey] = useState<boolean>(false);

    const [gameSettings, setGameSettings] = useState<GameSettings>({
        duration: 20 * 1000, // 1 minute in ms
        fps: 60,
        interval: 1000 / 60,
        isRunning: false
    })

    useEffect(() => {
        if (gameSettings.isRunning) {
            startTime.current = Date.now();
            window.addEventListener('keydown', handlePlayerInputs);

            requestAnimationFrame(gameLoop);
        }
    }, [gameSettings])

    const changeGameRunning = () => {
        setGameSettings(_prev => {_prev.isRunning = !_prev.isRunning; return _prev;});
    }

    const gameLoop = () => {
        const now = Date.now();
        const elapsedTime = now - startTime.current;

        if (elapsedTime >= gameSettings.duration) {
            if (requestRef.current !== undefined)
                cancelAnimationFrame(requestRef.current);
            
            window.removeEventListener('keydown', handlePlayerInputs);
            return;
        }

        update();
        
        requestRef.current = requestAnimationFrame(gameLoop);
    }

    const update = () => {
        // set the next key to be pressed
        if (currentKey === null) {
            getNextKey();
        }

        if (playerHitKey) {
            setCurrentkey(null);
            setPlayerHitKey(false);
        }
        console.log(currentKey)
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
        console.log(players[0].points, players[1].points)

        switch (currentKey)
        {
            case "up":
                if (e.key.toLowerCase() === 'w')
                    givePlayerPoint(1);
                else if (e.key === 'ArrowUp')
                    givePlayerPoint(0);
                else
                    handlePlayersMiss();
                break;
            case "down":
                if (e.key.toLowerCase() === 's')
                    givePlayerPoint(1);
                else if (e.key === 'ArrowDown')
                    givePlayerPoint(0);
                else
                    handlePlayersMiss();
                break;
            case "left":
                if (e.key.toLowerCase() === 'a')
                    givePlayerPoint(1);
                else if (e.key === 'ArrowLeft')
                    givePlayerPoint(0);
                else
                    handlePlayersMiss();
                break;
            case "right":
                if (e.key.toLowerCase() === 'd')
                    givePlayerPoint(1);
                else if (e.key === 'ArrowRight')
                    givePlayerPoint(0);
                else
                    handlePlayersMiss();
                break;
            default:
                handlePlayersMiss();
        }
    }

    // TODO make player points not go to less then 0
    const givePlayerPoint = (index: number) => {
        setPlayerHitKey(true);
        setPlayers(_curr => {
            _curr[index].points += 1;
            _curr[index].hits += 1;

            _curr[Number(!index)].points -= 1; 
            return _curr;
        });
    }

    const handlePlayersMiss = () => {
        setPlayers(_curr => {
            _curr[0].misess++;
            _curr[1].misess++;
            return _curr;
        });
    }


    return {
        players,
        currentKey,
        changeGameRunning,
    }
}

export default useSpaghettiGameLogic;
