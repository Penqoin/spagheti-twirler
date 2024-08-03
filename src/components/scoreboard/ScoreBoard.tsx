import React from "react";
import './Scoreboard.sass';


interface ScoreBoardProps {
    player1Score: number;
    player2Score: number;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({
    player1Score,
    player2Score
}) => {

    return <div className="scoreboard debug">
        <div>
            <span>Player 1</span>
            <span className="player-score">{player1Score}</span>
        </div>
        <div>
            <span>Player 2</span>
            <span className="player-score">{player2Score}</span>
        </div>
    </div>
}

export default ScoreBoard;
