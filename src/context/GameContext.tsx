import React, { createContext, useContext, useState } from "react";
import { GameInputs, GameSettings, Player, PlayerIndex } from "../types" 

interface GameContextType {
    players: [Player, Player];
    gameSettings: GameSettings;
    GAME_INPUTS: GameInputs;

    changeGameRunningState: (state: boolean) => void;
    increaseGameDuration: (newDuration: number) => void;

    registerPlayerHit: (playerIndex: PlayerIndex) => void;
    registerPlayerMiss: (playerIndex: PlayerIndex) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);


const GameProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
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

    const [gameSettings, setGameSettings] = useState<GameSettings>({
        fps: 60,
        duration: 60 * 1000,
        interval: 1000 / 60,
        isRunning: false
    });

    const GAME_INPUTS: GameInputs = {
        w: "up",
        ArrowUp: "up",

        s: "down",
        ArrowDown: "down",

        d: "right",
        ArrowRight: "right",
        
        a: "left",
        ArrowLeft: "left"
    };

    const changeGameRunningState = (state: boolean) => {
        setGameSettings(_prev => {
            const newSettings = {..._prev};
            newSettings.isRunning = state 
            return newSettings;
        });
    };

    const increaseGameDuration = (newDuration: number): void => {
        if (newDuration > 1) {
            setGameSettings(_prev => ({
                ..._prev,
                duration: newDuration
            }))
        }
    }

    const registerPlayerHit = (playerIndex: PlayerIndex): void => {
        setPlayers(_curr => {
            const newPlayers: [Player, Player] = [..._curr];
            newPlayers[playerIndex] = {
                ...newPlayers[playerIndex],
                hits: newPlayers[playerIndex].hits + 1,
                points: newPlayers[playerIndex].points + 1,
            };
            return newPlayers;
        })
    }

    const registerPlayerMiss = (playerIndex: PlayerIndex): void => {
        setPlayers(_curr => {
            const newPlayers: [Player, Player] = [..._curr];
            newPlayers[playerIndex] = {
                ...newPlayers[playerIndex],
                misess: newPlayers[playerIndex].misess + 1,
                points: newPlayers[playerIndex].points === 0 ? 0 : (newPlayers[playerIndex].points - 1),
            };
            return newPlayers;
        });
    }

    return <GameContext.Provider
            value={{
                players,
                gameSettings,
                GAME_INPUTS,
                changeGameRunningState,
                increaseGameDuration,
                registerPlayerHit,
                registerPlayerMiss
            }}
        >
        {children}
    </GameContext.Provider>
}

const useGameContext = () => {
    const context = useContext(GameContext);
    if (!context)
        throw new Error('must use Game context within game provider')
    return context;
}

export { useGameContext, GameProvider }
