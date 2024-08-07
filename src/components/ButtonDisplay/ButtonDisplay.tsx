
import { useEffect, useState } from "react";
import "./ButtonDisplay.sass"
import { useGameContext } from "../../context/GameContext";
import { GameInputs, InputKeys } from "../../types";

interface ButtonDisplayProps {
    letters: boolean; // if the component uses arrows or letters
    keypress: null | KeyboardEvent;
};

const ButtonDisplay: React.FC<ButtonDisplayProps> = ({
    letters, 
    keypress
}) => {
    const [buttonColor, setButtonColor] = useState<InputKeys | null>(null);
    const {
        GAME_INPUTS
    } = useGameContext();


    const handleAnimation = async () => {
        if (letters && keypress?.key && keypress?.key.length > 1)
            return;
        else if (!letters && keypress?.key.length === 1)
            return;

        const action: InputKeys = GAME_INPUTS[letters ? keypress.key.toLowerCase() as keyof GameInputs : keypress.key as keyof GameInputs];
        if (action) {
            const element = document.getElementById((letters ? buttonColor : ('arrow-' + buttonColor)) + "-button");
            element?.classList.remove(buttonColor + '-button-color')

            setButtonColor(action)
            const newEl = document.getElementById((letters ? action : ('arrow-' + action)) + "-button");
            newEl?.classList.add(action + '-button-color');

            // waits until animation is done then removes it 
            // 200ms comes from the sass file
            newEl?.classList.add('button-animate');
            setTimeout(() => {
                newEl?.classList.remove('button-animate');
            }, 50)
        }
    }

    useEffect(() => {
        handleAnimation();
    }, [keypress])


    return <div className={"button-display"}>
        <span className="top-button">
            <div id={letters ? "up-button" : "arrow-up-button"} className={'play-button'}>
                <h3 className={!letters ? 'arrow' : ''}>{letters ? "W" : "↑"}</h3>
            </div>
        </span>
        <span className="left-button">
            <div id={letters ? "left-button" : "arrow-left-button"} className={'play-button'}>
                <h3 className={!letters ? 'arrow' : ''}>{letters ? "A" : "↑"}</h3>
            </div>
        </span>
        <span className="bottom-button">
            <div id={letters ? "down-button" : "arrow-down-button"} className={'play-button'}>
                <h3 className={!letters ? 'arrow' : ''}>{letters ? "S" : "↑"}</h3>
            </div>
            </span>
        <span className="right-button">
            <div id={letters ? "right-button" : "arrow-right-button"} className={'play-button'}>
                <h3 className={!letters ? 'arrow' : ''}>{letters ? "D" : "↑"}</h3>
            </div>
        </span>
    </div> 
}

export type { ButtonDisplayProps }
export default ButtonDisplay;
