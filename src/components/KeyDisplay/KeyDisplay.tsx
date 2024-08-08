import React, { useEffect } from "react";
import { InputKeys } from "../../types";

import './KeyDisplay.sass'

interface KeyDisplayProps {
    currentKey: InputKeys | null;
}

const KeyDisplay: React.FC<KeyDisplayProps> = ({
    currentKey
}) => {

    useEffect(() => {

    }, [currentKey])

    return <div 
        className="key-display-container"
        >
        {currentKey}
    </div>
}

export type { KeyDisplayProps }
export default KeyDisplay;