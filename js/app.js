//*--------------------------- Constants --------------------------------*/



//*----------------------- Variables (state) ----------------------------*/
// 1) Define the required variables used to track the state of the game:
  // None of these variables will need to hold a value when they are defined
// 1.1) Use an array to represent the squares on the board.    
let board, turn, winner, winnerIs

// 1.2) Use a turn variable to track whose turn it is.

// 1.3) Use a winner variable to represent three different game states:
	  // a player that won
	  // a tie has occured
	  // or a game that is still in play.

//*------------------- Cached Element References ------------------------*/
// 2) Store cached element references on the page that will be accessed in code more than once in variables to make code more concise, readable, and performant:
	
	
	// 2.2) Store the element that displays the game status on the page.
	//cache ref for message element
	//rdy btn initializes play
	const play = document.querySelector('#play')
	const msg = document.querySelector('#message')
	// 2.1) Store the 9 elements that represent the squares on the page.
	//cache element references for board square divs
	const topLeft = document.querySelector('#sq0')
	const topMid = document.querySelector('#sq1')
	const topRight = document.querySelector('#sq2')
	const midLeft = document.querySelector('#sq3')
	const midMid = document.querySelector('#sq4')
	const midRight = document.querySelector('#sq5')
	const btmLeft = document.querySelector('#sq6')
	const btmMid = document.querySelector('#sq7')
	const btmRight = document.querySelector('#sq8')
	//cache element ref for reset btn
	const reset = document.querySelector('#reset')
	const grid = document.querySelectorAll('.square')
	
//*------------------------ Event Listeners -----------------------------*/
//Play btn
play.addEventListener('click', game)
//Event listeners for square divs on board
topLeft.addEventListener('click', handleClick)
topMid.addEventListener('click', handleClick)
topRight.addEventListener('click', handleClick)
midLeft.addEventListener('click', handleClick)
midMid.addEventListener('click', handleClick)
midRight.addEventListener('click', handleClick)
btmLeft.addEventListener('click', handleClick)
btmMid.addEventListener('click', handleClick)
btmRight.addEventListener('click', handleClick)
//reset btn event listener
reset.addEventListener('click', rst)



//*--------------------------- Functions --------------------------------*/
init();

function init(){
	play.removeAttribute('hidden')
	msg.innerText = 'Welcome to Tic Tac Toe!'
	setTimeout(function(){
		msg.innerText = 'Are you ready to Play?'
	}, 500)
	turn = -1
	board = [ null, null, null, null, null, null, null, null, null,]
	winner = false;
	winnerIs = null;
}

function game(){
	evaluate(board);
	exposeBoard();
	if(winnerIs === ('Player X' || 'Player O' || 'T' )){
		play.setAttribute('hidden', true);
		msg.innerText = `It is Player ${turn >= 1 ? "X's" : "O's"} turn`;
		turnToggle();
	}else{
		winnerYay();
	}
}

function evaluate(arr){
	if (
		Math.abs(arr[0] + arr[1] + arr[2]) === 3 ||
		Math.abs(arr[3] + arr[4] + arr[5]) === 3 ||
		Math.abs(arr[6] + arr[7] + arr[8]) === 3 ||
		Math.abs(arr[0] + arr[3] + arr[6]) === 3 ||
		Math.abs(arr[1] + arr[4] + arr[7]) === 3 ||
		Math.abs(arr[2] + arr[5] + arr[8]) === 3 ||
		Math.abs(arr[0] + arr[4] + arr[8]) === 3 ||
		Math.abs(arr[2] + arr[4] + arr[6]) === 3 )
	{
		winner = true
		if(turn >= 1){
			winnerIs = 'Player X'
			hideBoard();
		}else{
			winnerIs = 'Player O'
			hideBoard();
		}
	}else if(Math.abs(arr.reduce((a,b) => a + b))=== 9){
		winner = true
		winnerIs = 'T'
	}
}

function handleClick(evt){
	if(evt.target.id === 'sq0'){
		if(turn === 1){
			evt.target.innerText = 'X'
			board[0] = 1
			game();
		}else{
			evt.target.innerText = 'O'
			board[0] = -1
			game();
		}
	}
	if(evt.target.id === 'sq1'){
		if(turn === 1){
			evt.target.innerText = 'X'
			board[1] = 1
			game();
		}else{
			evt.target.innerText = 'O'
			board[1] = -1
			game();
		}
	}
	if(evt.target.id === 'sq2'){
		if(turn === 1){
			evt.target.innerText = 'X'
			board[2] = 1
			game();
		}else{
			evt.target.innerText = 'O'
			board[2] = -1
			game();
		}
	}
	if(evt.target.id === 'sq3'){
		if(turn === 1){
			evt.target.innerText = 'X'
			board[3] = 1
			game();
		}else{
			evt.target.innerText = 'O'
			board[3] = -1
			game();
		}
	}
	if(evt.target.id === 'sq4'){
		if(turn === 1){
			evt.target.innerText = 'X'
			board[4] = 1
			game();
		}else{
			evt.target.innerText = 'O'
			board[4] = -1
			game();
		}
	}
	if(evt.target.id === 'sq5'){
		if(turn === 1){
			evt.target.innerText = 'X'
			board[5] = 1
			game();
		}else{
			evt.target.innerText = 'O'
			board[5] = -1
			game();
		}
	}
	if(evt.target.id === 'sq6'){
		if(turn === 1){
			evt.target.innerText = 'X'
			board[6] = 1
			game();
		}else{
			evt.target.innerText = 'O'
			board[6] = -1
			game();
		}
	}
	if(evt.target.id === 'sq7'){
		if(turn === 1){
			evt.target.innerText = 'X'
			board[7] = 1
			game();
		}else{
			evt.target.innerText = 'O'
			board[7] = -1
			game();
		}
	}
	if(evt.target.id === 'sq8'){
		if(turn === 1){
			evt.target.innerText = 'X'
			board[8] = 1
			game();
		}else{
			evt.target.innerText = 'O'
			board[8] = -1
			game();
		}
	}
	
}

function winnerYay(){
	if(winnerIs === ('Player X' || 'Player 0')){
		msg.innerText = `${winnerIs} is the winner!`
	}else if(winnerIs === 'T'){
		msg.innerText = 'The game is a tie!'
	}
	reset.removeAttribute('hidden');
}

function rst(){
	reset.setAttribute('hidden', true);
	clearBoard();
	init();
}


function turnToggle(){
	turn = turn * -1
}

function exposeBoard(){
	topLeft.removeAttribute('hidden')
	topMid.removeAttribute('hidden')
	topRight.removeAttribute('hidden')
	midLeft.removeAttribute('hidden')
	midMid.removeAttribute('hidden')
	midRight.removeAttribute('hidden')
	btmLeft.removeAttribute('hidden')
	btmMid.removeAttribute('hidden')
	btmRight.removeAttribute('hidden')
}

function hideBoard(){
	topLeft.setAttribute('hidden', true)
	topMid.setAttribute('hidden', true)
	topRight.setAttribute('hidden', true)
	midLeft.setAttribute('hidden', true)
	midMid.setAttribute('hidden', true)
	midRight.setAttribute('hidden', true)
	btmLeft.setAttribute('hidden', true)
	btmMid.setAttribute('hidden', true)
	btmRight.setAttribute('hidden', true)
}
console.dir(topLeft.innerText)
function clearBoard(){
	topLeft.target.innerText = null
	topMid.target.innerText = null
	topRight.target.innerText = null
	midLeft.target.innerText = null
	midMid.target.innerText = null
	midRight.target.innerText = null
	btmLeft.target.innerText = null
	btmMid.target.innerText = null
	btmRight.target.innerText = null

}



// 3) Upon loading, the app should:
	// 3.1) Call an initialize function
	// 3.2) That initialize function should initialize the state variables:
	// 3.2.1) Initialize the board array to 9 nulls to represent empty squares.
	// // The 9 elements will "map" to each square.
		// Index 0 represents the top-left square.
	    // Index 1 represents the top-middle square.
			// So on, continuing through the entire board until...
	    // Index 8 maps to the bottom-right square.
	// 3.2.2) Initialize whose turn it is to 1 (player 'X'). 
				// Player 'O' will be represented by -1.
		//toggles turn back and forth
		
		
	  // 3.2.3) Initialize the winner variable to null.
	    // This represents that there is no winner or tie yet.
	    // The winner variable will hold the player value (1 or -1) if there's a winner. 
	    // The winner will hold a 'T' if there's a tie.
	  // 3.2.4) Render those state variables to the page by calling a render function.
	//loops turn between player 'x'(1) and player 'O' (-1)

// 3.3) The render function should:
		  // 3.3.1.1) Use the index of the iteration to access the square in the squares array that corresponds with the current cell being iterated over in the board array
		  // 3.3.1.2) Style that square however you wish dependant on the value contained in the current cell being iterated over (-1, 1, or null)
	  // 3.3.2) Render a message reflecting the current game state:
	    // 3.3.2.1) If winner has a value other than null (game still in progress), render whose turn it is.
	      // Hint: Maybe use a ternary inside of a template literal here?
	    // 3.3.2.2) If winner is equal to 'T' (tie), render a tie message.
	    // 3.3.2.3) Otherwise, render a congratulatory message to which player has won.
	      // Hint (again): Maybe use a ternary inside a template literal here

	  

		// 3.4) After completing this step, you should be able to manually change the values held in the board array in the initialization function and see the style of the corresponding square change on your page.
// 4) Define the required constants:

	// 4.1) Define the 8 possible winning combinations as an array of arrays.
	  // Each array will contain three indexes of the board that make a winner if they hold the same player value. 
		// If you are having trouble with this step, feel free to check out the winningCombos array in the solution code. 

	// 5) Next, the app should wait for the user to click a square and call a handleClick function
  // the handleClick function will...
		
	// 5.1) Obtain the index of the square that was clicked by:
	  // 5.1.1) "Extracting" the index from an id assigned to the element in the HTML 
		// Hint: Each id seems to correspond with an index in our board array. How could these be used if
		// we cleaned them up a bit?

	// 5.2) If the board has a value at the index, immediately return because that square is already taken.

	// 5.3) If winner is not null, immediately return because the game is over.

	// 5.4) Update the board array at the index with the value of turn.

	// 5.5) Change the turn by multiplying turn by -1 (this flips a 1 to -1, and vice-versa).

	// 5.6) Set the winner variable if there's a winner by calling a new function: getWinner.
	  // The getWinner function will...

	  // 5.6.1) There are a couple methods you can use to find out if there is a winner.
	   // This is the first, more elegant way that takes advantage of the winningCombos array you wrote above in step 4.
	   // The 5.6.2 step is a little simpler to comprehend, but you'll need to write a lot more code.
	   // The 5.6.2 step also won't take advantage of the winningCombos array, but using it as a reference will help you build a solution.
	   // Choose only one path.
		  // 5.6.1.1) Loop through the each of the winning combination arrays defined.
		  // 5.6.1.2) Total up the three board positions using the three indexes in the current combo.
		  // 5.6.1.3) Convert the total to an absolute value (convert any negative total to positive).
		  // 5.6.1.4) If the total equals 3, we have a winner! Set the winner variable to the board's value at the index specified by the first index of that winning combination's array by returning that value.

		// 5.6.2) This solution is less elegant, but might be easier to write on your own if you're struggling with the 5.6.1.X pseudocode.
		  // 5.6.2.1) For each one of the winning combinations you wrote in step 4, find the total of each winning combination.
		  // 5.6.2.2) Convert the total to an absolute value (convert any negative total to positive)
		  // 5.6.2.3) If the total equals 3, we have a winner! Set the winner variable to the board's value at the index specified by the first index of that winning combination's array by returning that value.

		// 5.6.3) Next, If there's no winner, check if there's a tie:

		// 5.6.4) Set the winner varible to "T" if there are no more nulls in the board array by returning the string "T".
	  
		// 5.6.5) Otherwise return null.

// 5.7) All state has been updated, so render the state to the page (step 3.3).
// 6) Handle a player clicking the replay button:

	// 6.1) Add a replay button to the HTML document

	// 6.2) Store the new replay button element

	// 6.3) Do steps 4.1 (initialize the state variables) and 4.2 (render).