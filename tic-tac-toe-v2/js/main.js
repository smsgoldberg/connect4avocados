/*----constants---*/
 COLORS = {
    0: null,
    1: '#00F1FF',
   '-1': '#ffd319'
}


const winningCombos = 
   [[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6] ]

/*-----state variables ----*/
let board //this array holds the squares
let player //enables us to remember whose turn it is
let winner //represents 3 different possibilities -- a winner, a tie, or a game in progress

/*---cached elements---*/

//these elements are placed here because of the scoping issues caused by including the DOMContentLoaded function below 
let squareEls;
let playAgainButton;
let messageBoard;

//this particular event listener was added because the JS was loading faster than the DOM and causing null errors
document.addEventListener('DOMContentLoaded', function () {

//enables us to change what is displayed on the message board above the game board
 messageBoard = document.querySelector('h2');

playAgainButton = document.querySelector('button');

squareEls = [...document.querySelectorAll('.cells')];

/* --- event listeners ---  */

//enables player to reset the board for a new game
playAgainButton.addEventListener('click', initializeGame);

//allows the player to click on a square cell to make a move
document.getElementById('board').addEventListener('click', playerMove);

});

/*----functions----*/

initializeGame();

function initializeGame() {
    //let's set our initial state variables 
    player = 1
    winner = 0;
    board =  [null, null, null, null, null, null, null, null, null];
    render();
}

function render() {

    renderBoard() 

    renderMessage()

    renderControls()

}

function playerMove(event) {
    //console.log('target of the click \n', event)
    const squareIdx = squareEls.indexOf(event.target)
    //console.log('this is squareIdx in playerMove', squareIdx)

    //null is the starting value for each square, so if the space is already occupied, the function ends
    if (board[squareIdx] !== null ) return;
    //which player the square belongs to
    board[squareIdx] = player;
    console.log('this is board', board)
    player *= -1;

    render()
}

function renderBoard() {

    board.forEach((cell, cellIdx) => {
        console.log('this is cell', cell)
        console.log('this is cellIdx', cellIdx)
      if (cell === 1) {
        squareEls[cellIdx].innerText = 'X';
        squareEls[cellIdx].style.color = COLORS[1];
    } else if (cell===-1) {
        squareEls[cellIdx].innerText = 'O';
        squareEls[cellIdx].style.color = COLORS['-1'];
    } else {
        squareEls[cellIdx].innerText = '';
        //squareEls[cellIdx].style.color = 'black';
    }
    });
}

function renderMessage() {

}

function renderControls() {

}