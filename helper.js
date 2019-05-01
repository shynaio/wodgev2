export const config = {
    refreshTime: 40,
    blockWidth: 32,
    blockHeight: 32,
    baseWallSpeed: 8,
    wallSpeed: 8,
    wallColor: '#000000',
    wallAccelerationRatio: 1/8
}

export const gameWindow = {
    width: 900,
    height: 512
}

export const player = {
    width: 32,
    height: 32,
    x: 100,
    y: 256,
    speed: 10,
    color: '#FF5050'
}

export const canvas = document.getElementById('gameWindow');
export var pressedKey = null;
export var calcFPS = 0;
export var fps = 0;
