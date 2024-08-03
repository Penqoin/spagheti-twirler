type Player = {
    points: number;

    misess: number;
    hits: number;
}

type InputKeys = "up" | "down" | "left" | "right" ;

type GameSettings = {
    duration: number;
    fps: number;
    interval: number;
    isRunning: boolean;
}



export type { Player, InputKeys, GameSettings }
