/*----constants---*/

//we can relate players to colors
const COLORS = {
    //I set my background to black, so does the null state also need to be black? I would think so...
    0: 'black',
    ///player1 will be this nice electric blue
    1: '00F1FF',
    //and player2 will be purple. Note that you must use a string to hold negative numbers
    '-1': '9B00E8'
}

/*---cached elements---*/

const playAgainButton = document.querySelector('button');

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
  board = [
    [0, 0, 0], //col 0 - remember that this is zero-indexed! 
    [0, 0, 0] // col 1
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

    renderControls()

}


function renderBoard() {

}

function renderMessages() {

}

function renderControls() {
    
}

/*-----event listeners----*/

//clicking the "play again button" allows the user to replay the game
playAgainButton.addEventListener('click', initializeGame()) 



/*---- sound effects------*/
//this section is just me testing an effect - we'll comment it out if necessary

//this audio is the start sound and should be heard whenever the player clicks the play again button
let startSound = new Audio('audio/mixkit-retro-game-notification-212.wav')
