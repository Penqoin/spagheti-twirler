import { useEffect, useState } from "react";

/*
 * Used to listen to different types of player inputs
 * 
 */

const useEventListener = () => {
    const [keypress, setKeypress] = useState<KeyboardEvent | null>(null);

    useEffect(() => {
        const func = (e: KeyboardEvent) => {
            setKeypress(e);
        }
        window.addEventListener('keydown', func)

        return () => {
            window.removeEventListener('keydown', func)
        }
    }, [])

    return {
        keypress
    }
}

export default useEventListener;