import React from "react";
import './fork.sass';

interface ForkProps {
    
}


const Fork: React.FC<ForkProps> = () => {
    return <div className="fork">
        <div className="fork-bottom" />
        <div className="fork-handle" />
        <div className="fork-head" />
        <div className="fork-spike" />
        <div className="fork-spike" />
        <div className="fork-spike" />
    </div>
}


export default Fork;

