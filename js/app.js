
//*----------------------- Variables (state) -------------------------------*//
		let board, turn, winner
//*------------------------------- Constants -------------------------------*//
let oWinBank = [
	"That was O-mazing!",
]
let xWinBank = [
	"What an X-ellent game!"
]
let oWinMsg = oWinBank[Math.floor(Math.random() * oWinBank.length)]
let xWinMsg = xWinBank[Math.floor(Math.random() * xWinBank.length)]
let xColor = 'blue'
let oColor = 'orange'
//*---------------------- Cached Element References ------------------------*//
let body = document.querySelector('body')
let h1 = document.querySelector('h1')
let play = document.querySelector('#play')
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
let section = document.querySelector('section')

//*------------------------ Event Listeners -----------------------------*//
play.addEventListener('click', init)
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

//*--------------------------- Functions -------------------------------*//
pageLoad();
function pageLoad(){
	msg.innerText = "Welcome to Tic Tac Toe!"
	hideboard();
}


function init(){
	exposeBoard()
	h1.setAttribute('hidden', true)
	play.setAttribute('hidden', false)
	reset.setAttribute('hidden', true)
	gameBoard.forEach(sq => sq.innerText = "")
	board = [ null, null, null, null, null, null, null, null, null]
	turn = 1;
	winner = null;
	render();
	
}

function render(){
	if(winner === null){
		if (turn === 1){
			msg.innerText = "It is Player X's turn"
			msg.style.color = 'ivory'
			body.style.background = xColor
		}
		if(turn === -1){
			msg.innerText = "It is Player O's turn"
			msg.style.color = 'ivory'
			body.style.backgroundColor = oColor
		}
		for (let i = 0; i < board.length; i ++){
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
		msg.innerText = xWinMsg
		reset.removeAttribute('hidden')
		body.backgroundColor = xColor
	}
	if(winner === -1){
		msg.innerText = oWinMsg
		reset.removeAttribute('hidden')
		body.backgroundColor = oColor
	}
	if(winner === 'T'){
		msg.innerText = "Cat's Game!"
		reset.removeAttribute('hidden')
	}
}

function handleClick(evt) {
	body.style.backgroundColor = 'white'
	let sqId = evt.target.id
	let index = sqId.substring(2)

	if(winner !== null){
		return
	}
	if(board[index] !== null){
		let cheatin = [
			"Quit tryin to cheat ya cheater!",
			"If cheating was cool, everyone would do it",
			"Do you not see that big giant thing right there already?",
			"Is there something wrong with you?",
			"Call Kenya National Park, we got a cheetah'",
			"You're just insistent on trying to cheat aren't you?",
			"If you're really trying to cheat, then you better hack the code, cause if this all you got, you're really bad at cheatin'"
		]
		let cPhrase = cheatin[Math.floor(Math.random() * cheatin.length)]
		msg.innerText = cPhrase
		msg.style.color = 'red'
		body.style.backgroundColor = 'lightpink'
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

function hideboard() {
	section.setAttribute('hidden',true)
	sq0.setAttribute('hidden',true)
	sq1.setAttribute('hidden',true)
	sq2.setAttribute('hidden',true)
	sq3.setAttribute('hidden',true)
	sq4.setAttribute('hidden',true)
	sq5.setAttribute('hidden',true)
	sq6.setAttribute('hidden',true)
	sq7.setAttribute('hidden',true)
	sq8.setAttribute('hidden',true)
}

function exposeBoard() {
	section.removeAttribute('hidden')
	sq0.removeAttribute('hidden')
	sq1.removeAttribute('hidden')
	sq2.removeAttribute('hidden')
	sq3.removeAttribute('hidden')
	sq4.removeAttribute('hidden')
	sq5.removeAttribute('hidden')
	sq6.removeAttribute('hidden')
	sq7.removeAttribute('hidden')
	sq8.removeAttribute('hidden')
}