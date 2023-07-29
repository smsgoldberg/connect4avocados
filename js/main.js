//console.log('js is linked and working');

/*----- constants -----*/
// this is going to hold things like players, colors, anything that might be useful to refer to, but doesn't
//change a whole lot over the course of gameplay
 
// the constants for this game are going to be an object that relates players to color, so player 1 plays one color and player 2 plays another color
// or initialize a 'blank' color, for when no moves have been made.
const COLORS = {
    0: 'white', 
    1: 'purple',
    //we can use a string to hold a negative number
    '-1': 'orange'
}

	/*----- state variables -----*/

    // thiings we want to check and refer to in order to render properly the changes made to our state
    let board //an array of 7 nested arrays
    //the board will track who made which moves and where 
    let turn //will be a value of 1 or -1 (1 || -1)
    let winner // null || 1 || -1 || 'T'

	/*----- cached elements  -----*/
    // grabbing our HTML elements and saving them to variables for later use
    const messageEl = document.querySelector('h2');
    const playAgainButton = document.querySelector('button');
    //for marker elements, we want to save a nodeList 
    //a NodeList!= an array
    //we want to convert our NodeList to an array, so we can track the changes
    // ... = spread operator
    // takes a copy of whatever (object, NodeList, HTMLCollection, array)
    //and pushes those copies into an array  (bc we used aarray brackets -> [])

    const markerEls = [...document.querySelectorAll('#markers > div')]

    //console.log('this is the playAgainButton', playAgainButton);
    //console.log('this is messageEl', messageEl);
    //console.log('this is markerEls', markerEls);
    
	/*----- functions -----*/
    //things like initializing the game(set values for our state variables)
    //render
    //make a move
    //check for winner


    //check for a winner() -> checks for win conditions(horizontal, vertical, diagonal) (we might want multiple functions for this)
    //handleAPlayerChoice -> determines which column, and dislpays(or calls a render function) for a 'game piece' to be displayed
    // check if a move is valid(maybe)

    //init() -> will initialize a new game(empty the board)
    init(); //called at the very beginning 
    function init() {
        //set values for our initial state variables
        turn = 1
        winner = null
        board = [
            [0, 0, 0, 0, 0, 0], //col 0
            [0, 0, 0, 0, 0, 0], //col1
            [0, 0, 0, 0, 0, 0], //col2
            [0, 0, 0, 0, 0, 0], //col3
            [0, 0, 0, 0, 0, 0], //col4
            [0, 0, 0, 0, 0, 0], //col5
            [0, 0, 0, 0, 0, 0] // col6
        ]

        render();
    }


    function renderBoard() {
            //loop over our array that represents the board
            //apply a specific background color for each element
            board.forEach((colArr, colIdx) => {
               console.log('this is colArr', colArr)
               console.log('this is colIdx', colIdx)
               console.log('==========================')
               //loop over our column arrays
               colArr.forEach((cellVal, rowIdx) => {
                //console.log('this is cellVal,', cellVal);
                //console.log('this is rowIdx', rowIdx);
                //determining the cell's id 
                const cellId = `c${colIdx}r${rowIdx}`;
                //console.log('this is cellId', cellId);
                //target each cell(the actual element)
                const cellEl = document.getElementById(cellId);
                //console.log('this is cellEl', cellEl);
                //applies the color associated with the value of the div in its current state
                cellEl.style.backgroundColor = COLORS[cellVal];
                //console.log('this is colIdx', colIdx)
               })
            })
    }

    function renderControls() {
        //change initial visibility of the button
        playAgainButton.style.visibility = winner ? 'visible'  : 'hidden'
        //change visibility of our marker buttons
        markerEls.forEach((markerEl, colIdx0 => {
            const hideMarker = !board[colIdx].includes(0) || winner

            markerEl.style.visibility = hideMarker ? 'hidden' : 'visible'
        })

    }

    //render message based on whose turn it is
    function renderMessage() {
        //message is a tie
        if (winner === 'T') {
            messageEl.innerText = "It's a Tie!!!!!"
        } else if (winner) {
            messageEl.innerHTML = `
            <span style="color: ${COLORS[winner]}">
            ${COLORS[winner].toUpperCase()}
            </span> Wins`
        } else {
          ` <span style="color: ${COLORS[winner]}">
            ${COLORS[winner].toUpperCase()}
            </span>'s turn`
        }
        //message the winner
        //message the current turn
    }
     //render() -> will display changes when they are relevant
         //our render function MIGHT call other, more specific render functions (like for the board, messages, etc)
    //check for a winner() -> checks for win conditions(horizontal, vertical, diagonal) (we might want multiple functions for this)
    function render() {
        //render our board
        renderBoard()
        //render our messages
        renderMessage();
        //render our controls
        renderControls();
    }

    //handleDrop -> determines which column, and dislpays(or calls a render function) for a 'game piece' to be displayed
    // check if a move is valid(maybe)
    function handleDrop(event) {
        console.log('target of the click\n', event.target)
        //needs to relate a click to the column selected
        const colIdx = markerEls.indexOf(event.target);
        console.log('this is colIdx in handleDrop\n', colIdx);
        //determine if the move is valid, and what to do if it is not;
        //we need to a sign a value to a specific board element
        const colArr = board[colIdx]
        console.log('this is colArr', colArr)
        //indexOf returns the first thing it encounters when we use 0 as the argument
        const rowIdx = colArr.indexof(0);
        if (rowIdx === -1) return;
        console.log('this is rowIdx\n', rowIdx)
        //assign a value using these two variables (colArr, rowIdx)
        colArr[rowIdx] = turn;
        //change the turn after htings have happened
        turn *= -1;
        //check for a winner
        //render the changes to the board
        render();
    }
	

   // checkForAWinner() -> checks for win conditions(horizontal, vertical, diagonal) (we might want multiple functions for this)

   //break check for winner up into different steps
   // -> checkAdjacentTiles 
   function countAdjacent(colIdx, rowIdx, colOffset, rowOffset) {
         const player = board[colIdx][rowIdx]
         let count = 0

         //use a while loop to check the spaces around the played tile
         colIdx += colOffset
         rowIDx += rowOffset
         //we need to keep within the board and only count if the disc matches the player
         while(
            board[colIdx] !== undefined && 
            board[colIdx][rowIdx] !== undefined &&
            board[colIdx] [rowIdx] === player
         ) {
            count++
            colIdx += colOffset
            rowIDx += rowOffset
         }
         console.log('the count in countAdj');
         return count
   }
   // checkForHorizontalWin
   function checkHorizontalWinner(colIdx, rowIdx) {
    //going to the left
    const adjCountLeft = countAdjacent(colIdx, rowIdx, -1, 0)
    const adjCountRight = countAdjacent(colIdx, rowIdx, -1, 0)

    return adjCountLeft = adjCountRight >= 3 ? board[colIdx][rowIdx] : null
    //going to the right
   }
   //checkForVerticalWin
   function checkVerticalWinner(colIdx, rowIdx) {
      // go from N to S
      // 0 = not changing our column
      //-1 = moving south down the column 
      return countAdjacent(colIdx, rowIdx, 0, -1) === 3 ? board[colIdx][rowIdx] : null
   }
   //checkForDiagonalWin ---> two directions to check NWSE & NESW
   //call all of these with one big check a winner function
   function getWinner(colIdx, rowIdx) {
    return(
        checkVerticalWinner(colIdx, rowIdx)
    )
   }

    	
/*----- cached elements  -----*/	
// grabbing our html elements and saving them to variables for later use	
const messageEl = document.querySelector('h2')	
const playAgainButton = document.querySelector('button')	
// for marker elements, we want to save a NodeList	
// a NodeList !== Array	
// we want to convert our NodeList to an array, so we can track the changes	
// ... = spread operator	
// takes a copy of whatever (object, NodeList, HTMLCollection, array) pushes those copies into an array (bc we used array brackets -> [])	
const markerEls = [...document.querySelectorAll('#markers > div')]	

    
    


	/*----- event listeners -----*/
    //what events will happen, what should they be attached to, and what functions do they call
    //click on a marker
    document.getElementById('markers').addEventListener('click', handleDrop);
    //click playAgain button

    //2 things left - check for a winner & make our play again work.
