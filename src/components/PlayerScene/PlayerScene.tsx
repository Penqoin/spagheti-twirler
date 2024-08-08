import React from "react";
import ButtonDisplay from "../ButtonDisplay/ButtonDisplay";
import Fork from "../fork/fork";

import './PlayerScene.sass'
import SpaghettiBowl from "../Spaghetti-bowl/Spaghetti-bowl";

interface PlayerSceneProps {
    Player1: boolean;
    keypress: KeyboardEvent | null
}

const PlayerScene: React.FC<PlayerSceneProps> = ({
    Player1,
    keypress
}) => {

    return <div className="player-scene">
        <Fork />
        <SpaghettiBowl />
        <ButtonDisplay keypress={keypress} letters={Player1} />
    </div>
}

export type { PlayerSceneProps }
export default PlayerScene;