import {LEVEL , OBJECT_TYPE} from '../Pac-Man-setup';
import gameBoard from './gameBoard';
import pacman from './pacman';

//DOM ELEMENTS
const gameGrid = document.querySelector('#game');
const scoreTable = document.querySelector('#score');
const startButton = document.querySelector('#start-button');

// game const
const POWER_PILL_TIME = 10000; // in ms
const GLOBAL_SPEED = 80; // global speed for the game loop in ms
const gameBoard = gameBoard.createGameBoard(gameBoard,LEVEL);

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

function startGame(){
    gameWin = false;
    powerPillActive = false;
    score = 0;
    startButton.classList.add('hide')

}

startButton.addEventListener('click',startGame);