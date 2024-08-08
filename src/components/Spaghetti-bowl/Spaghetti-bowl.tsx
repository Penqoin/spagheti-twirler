import React from "react";

import './Spaghetti-bowl.sass'
import Spaghetti from "../Spaghetti/Spaghetti";

interface SpaghettiProps {

}

const SpaghettiBowl: React.FC<SpaghettiProps> = () => {

    return <div className="spaghetti-bowl-container debug">
        <div className="top-spaghetti-container">
            <Spaghetti />
            <Spaghetti />
            <Spaghetti />
            <Spaghetti />
            <Spaghetti />
            <Spaghetti />
            <Spaghetti />
            <Spaghetti />
            <Spaghetti />
            <Spaghetti />
            <Spaghetti />
            <Spaghetti />
            <Spaghetti />
            <Spaghetti />
            <Spaghetti />
            <Spaghetti />
            <Spaghetti />
        </div>
        <div className="spaghetti-bowl" />
    </div>
}

export default SpaghettiBowl;