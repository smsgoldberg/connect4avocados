/*----constants---*/

//we can relate players to colors
const players = {
    //I set my background to black, so does the null state also need to be black? I would think so...
    0: 'black',
    ///player1 will be this nice electric blue
    1: 'x'
    //'00F1FF',
    //and player2 will be purple. Note that you must use a string to hold negative numbers
    '-1': 'o'
    // '9B00E8'
}

/*---cached elements---*/

//this is the h2 message board over the game board
const messageBoard = document.querySelector('h2')

//pretty self-explanatory -- this is the play again button!

//console.log('this is the message board', messageBoard)
const playAgainButton = document.querySelector('button');

//Most people will intuitively try to click in the squares for a tic-tac-toe game, so we won't use any markers external to the board
//const squares = [...document.querySelectorAll('#board > div')];

//console.log('this is the message board', messageBoard)
//console.log('this is the play again button', playAgainButton)

/*----state variables----*/

let board// your array of arrays
let turn // 1 || -1, depending on which player's turn it is
let winner // null || 1 || -1 || 'T'  (these are your end states)

/*----cached elements----*/


/*----functions----*/

initializeGame() //called at the very beginning of the game, this game initializes the game with starting values

function initializeGame() {
  //set the initial values for our state variables
  turn = 1
  winner = null

  //your board array is made up of other arrays
  //keep an eye on this section of code
  board = [
    [0, 0, 0], //col 0 - remember that this is zero-indexed! 
    [0, 0, 0], // col 1
    [0, 0, 0] // col 2
  ]

  render();
}

//the render() function displays changes if and when they are relevant 
function render() {
    
    //render the board
    renderBoard()

    //render any mesages
    renderMessages() 
    
    //hide play again button until end of game
    playAgainButton.disabled = !winner;
    
}


function renderBoard() {

}

function playerMove(evt) {
  //console.log('target of the click', event)
}

function renderMessages() {

}



/*-----event listeners----*/

//clicking the "play again button" allows the user to replay the game
playAgainButton.addEventListener('click', initializeGame) 
document.getElementById('board').addEventListener(click, playerMove);



/*---- sound effects------*/
//this section is just me testing an effect - we'll comment it out if necessary

//this audio is the start sound and should be heard whenever the player clicks the play again button
let startSound = new Audio('audio/mixkit-retro-game-notification-212.wav')
