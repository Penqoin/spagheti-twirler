import React, { useEffect } from "react"
import { useGameContext } from "../../context/GameContext"
import Fork from "../fork/fork";

interface SpaghettiDisplayProps {
    player1: boolean;
}

const SpaghettiDisplay: React.FC<SpaghettiDisplayProps> = ({
    player1
}) => {
    const {
        playersDelta
    } = useGameContext();

    useEffect(() => {
        if (playersDelta.index === Number(!player1)) {
            if (playersDelta.pointDelta === 1) {
                console.log('point gained')
            }
            else if (playersDelta.pointDelta === -1) {
                console.log('point lost')
            }
        }
    }, [playersDelta])

    return <div>
        <Fork />
    </div>
}

export default SpaghettiDisplay