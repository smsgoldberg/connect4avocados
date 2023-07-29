/*----constants---*/
const COLORS = {
    0: 'black',
    1: '00F1FF',
    '-1': 'ff901f'
}

const winningCombos = {
   [ [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
}

/*-----state variables ----*/
let board //this array holds the squares
let turn //enables us to remember whose turn it is
let winner //represents 3 different possibilities -- a winner, a tie, or a game in progress

/*---cached elements---*/

//enables us to change what is displayed on the message board above the game board
const messageBoard = document.querySelector('h2');

const playAgainButton = document.querySelector('button');

/*----functions----*/

/*-----event listeners----*/