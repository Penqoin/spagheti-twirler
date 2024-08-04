
import "./ButtonDisplay.sass"

interface ButtonDisplayProps {

}

const ButtonDisplay: React.FC<ButtonDisplayProps> = () => {
    return <div className="button-display">
        <span className="top-button">
            <div className="play-button">W</div>
        </span>
        <span className="left-button">
            <div className="play-button">A</div>
        </span>
        <span className="bottom-button">
            <div className="play-button">S</div>
            </span>
        <span className="right-button">
            <div className="play-button">D</div>
        </span>
    </div> 
}

export type { ButtonDisplayProps }
export default ButtonDisplay;
