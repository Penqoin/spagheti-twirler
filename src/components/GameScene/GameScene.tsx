import React, { useEffect } from "react";
import ButtonDisplay from "../ButtonDisplay/ButtonDisplay";
import Fork from "../fork/fork";
import ScoreBoard from "../scoreboard/ScoreBoard";
import { useGameContext } from "../../context/GameContext";
import useGameLogic from "../../hooks/useGameLogic";
import useEventListener from "../../hooks/useEventListener";

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
    
    return <div>
        <span>{currentKey}</span>
        <ButtonDisplay />
        <Fork />
        <ScoreBoard />
    </div>
}

export type { GameSceneProps }
export default GameScene;
