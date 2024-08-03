import React from "react";
import './Scoreboard.sass';
import { Player } from "../../types";
import { useGameContext } from "../../context/GameContext";


interface ScoreBoardProps {
    
}

const ScoreBoard: React.FC<ScoreBoardProps> = () => {
    const {
        players 
    } = useGameContext();

    return <div className="scoreboard debug">
        <div>
            <span>Player 1</span>
            <span className="player-score">{players[0].points}</span>
        </div>
        <div>
            <span>Player 2</span>
            <span className="player-score">{players[1].points}</span>
        </div>
    </div>
}

export default ScoreBoard;
