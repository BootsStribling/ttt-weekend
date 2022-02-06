
//*----------------------- Variables (state) -------------------------------*//
		let board, turn, winner
//*------------------------------- Constants -------------------------------*//
		
//*---------------------- Cached Element References ------------------------*//
let gameBoard = document.querySelectorAll('.square')
let sq0 = document.querySelector('#sq0')
let sq1 = document.querySelector('#sq1')
let sq2 = document.querySelector('#sq2')
let sq3 = document.querySelector('#sq3')
let sq4 = document.querySelector('#sq4')
let sq5 = document.querySelector('#sq5')
let sq6 = document.querySelector('#sq6')
let sq7 = document.querySelector('#sq7')
let sq8 = document.querySelector('#sq8')
let msg = document.querySelector('#message')
let reset = document.querySelector('#reset')

//*------------------------ Event Listeners -----------------------------*//
sq0.addEventListener('click',handleClick)
sq1.addEventListener('click',handleClick)
sq2.addEventListener('click',handleClick)
sq3.addEventListener('click',handleClick)
sq4.addEventListener('click',handleClick)
sq5.addEventListener('click',handleClick)
sq6.addEventListener('click',handleClick)
sq7.addEventListener('click',handleClick)
sq8.addEventListener('click',handleClick)
reset.addEventListener('click', init)

//3--------------------------- Functions 2-------------------------------*//
//33) Upon loading, the app should3

	// 3.1) Call aninitialize function 
	init();
	// 3.2) That initialize function should initialize the state variables:
function init(){
	reset.setAttribute('hidden', true)
	gameBoard.forEach(sq => sq.innerText = "")
	board = [ null, null, null, null, null, null, null, null, null]
	turn = 1;
	winner = null;
	render();
}


// 3.3) The render function should:
function render() {
	// 3.3.2.1) If winner has a value other than null (game still in progress), render whose turn it is.
	if(winner === null){
		if (turn === 1){
			msg.innerText = "It is Player X's turn"
		}
		if(turn === -1){
			msg.innerText = "It is Player O's turn"
		}
		// 3.3.1) Loop over the board array (which represents the squares on the page), and for each iteration:
		// 3.3.1.1) Use the index of the iteration to access the square in the squares array that corresponds with the current cell being iterated over in the board array
		for (let i = 0; i < board.length; i ++){
			// 3.3.1.2) Style that square however you wish dependant on the value contained in the current cell being iterated over (-1, 1, or null)
			if(board[i] === 1){
				gameBoard[i].innerText = 'X'
			}
			if(board[i] === -1){
				gameBoard[i].innerText = 'O'
			}
		}
	}
	getWinner();
	if(winner === 1){
		msg.innerText = "Player X is the winner!"
		reset.removeAttribute('hidden')
	}
	if(winner === -1){
		msg.innerText = "Player O is the winner!"
		reset.removeAttribute('hidden')
	}
	if(winner === 'T'){
		msg.innerText = "Cat's Game!"
	}
}

function handleClick(evt) {
	let sqId = evt.target.id
	let index = sqId.substring(2)

	if(winner !== null){
		return
	}
	if(board[index] !== null){
		return
	}
	board[index] = turn

	turn = turn * -1

	render();
}

function getWinner(){

	const wins = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6]
	]
	const winCombos = []
	for (let i = 0; i < wins.length; i ++){
		const sum = board[wins[i][0]] + board[wins[i][1]] + board[wins[i][2]]
		winCombos.push(sum)
		let xWon = winCombos.some(answer => answer === 3)
		let oWon = winCombos.some(answer => answer === -3)
		let tie = board.every(square => square !== null)
		if(xWon){
			winner = 1
		}else if(oWon){
			winner = -1
		}else if(tie){
			winner = 'T'
		}
	}
}

// 5.7) All state has been updated, so render the state to the page (step 3.3).


// 6) Handle a player clicking the replay button:

	// 6.1) Add a replay button to the HTML document

	// 6.2) Store the new replay button element

	// 6.3) Do steps 4.1 (initialize the state variables) and 4.2 (render).