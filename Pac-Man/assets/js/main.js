import {LEVEL , OBJECT_TYPE} from '../Pac-Man-setup';

//DOM ELEMENTS
const gameGrid = document.querySelector('#game');
const scoreTable = document.querySelector('#score');
const startButton = document.querySelector('start-button');

// game const
const POWER_PILL_TIME = 10000; // in ms
const GLOBAL_SPEED = 80; // global speed for the game loop in ms

//initial setup
//something to hold our scores
let score = 0;
let timer = null;
let gameWin = false;
let powerPillActive = false; // used when pacman going to eat the power pill
let powerPillTimer = null ;

function gameOver(pacman , grid){

}

function checkCollision(pacman , ghosts){

}

function gameLoop(pacman , ghosts){

}