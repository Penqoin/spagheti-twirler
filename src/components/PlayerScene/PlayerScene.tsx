import React from "react";
import ButtonDisplay from "../ButtonDisplay/ButtonDisplay";
import Fork from "../fork/fork";

import './PlayerScene.sass'
import SpaghettiBowl from "../Spaghetti-bowl/Spaghetti-bowl";
import SpaghettiDisplay from "../SphaghettiDisplay/SpaghettiDisplay";

interface PlayerSceneProps {
    Player1: boolean;
    keypress: KeyboardEvent | null
}

const PlayerScene: React.FC<PlayerSceneProps> = ({
    Player1,
    keypress
}) => {

    return <div className="player-scene">
        <SpaghettiDisplay player1={Player1} />
        <ButtonDisplay keypress={keypress} letters={Player1} />
    </div>
}

export type { PlayerSceneProps }
export default PlayerScene;