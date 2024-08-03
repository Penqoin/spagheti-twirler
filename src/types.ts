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

type PlayerIndex = 0 | 1;

type GameInputs = {
    w: "up",
    ArrowUp: "up",

    s: "down",
    ArrowDown: "down",

    d: "right",
    ArrowRight: "right",
    
    a: "left",
    ArrowLeft: "left"
}

export type { Player, InputKeys, GameSettings, PlayerIndex, GameInputs }
