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
    w: InputKeys,
    ArrowUp: InputKeys,

    s: InputKeys,
    ArrowDown: InputKeys,

    d: InputKeys,
    ArrowRight: InputKeys,
    
    a: InputKeys,
    ArrowLeft: InputKeys
}

type PlayerDelta = {
    index: PlayerIndex;
    pointDelta: 1 | 0 | -1;
}

export type { Player, InputKeys, GameSettings, PlayerIndex, GameInputs, PlayerDelta }