import React, { useEffect } from "react";
import ScoreBoard from "../scoreboard/ScoreBoard";
import { useGameContext } from "../../context/GameContext";
import useGameLogic from "../../hooks/useGameLogic";
import useEventListener from "../../hooks/useEventListener";

import './GameScene.sass'
import KeyDisplay from "../KeyDisplay/KeyDisplay";
import PlayerScene from "../PlayerScene/PlayerScene";

interface GameSceneProps {
}

const GameScene: React.FC<GameSceneProps> = () => {

    const {
        changeGameRunningState
    } = useGameContext();

    const {
        keypress
    } = useEventListener();

    const {
        currentKey,
    } = useGameLogic({keypress});

    useEffect(() => {
        changeGameRunningState(true)
    }, [])
    
    return <div className="game-container">
        <ScoreBoard />
        <KeyDisplay currentKey={currentKey} />

        <div className="game-scene debug">
            <PlayerScene Player1={true} keypress={keypress} />
            <PlayerScene Player1={false} keypress={keypress} />
        </div>
    </div>
}

export type { GameSceneProps }
export default GameScene;
