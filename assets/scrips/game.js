const rulesElement = document.getElementById('rules');
const playerConfigElement = document.getElementById('playerConfig');
const playElement = document.getElementById('play');
const player1Element = document.getElementById('player1');
const gameBoardElement = document.getElementById('gameBoard');
const player2Element = document.getElementById('player2');
const resultElement = document.getElementById('result');
let hole0 = document.getElementById('0')
let hole1 = document.getElementById('1')
let hole2 = document.getElementById('2')
let hole3 = document.getElementById('3')
let hole4 = document.getElementById('4')
let hole5 = document.getElementById('5')
let hole6 = document.getElementById('6')
let hole7 = document.getElementById('7')
let hole8 = document.getElementById('8')
let hole9 = document.getElementById('9')
let hole10 = document.getElementById('10')
let hole11 = document.getElementById('11')
let hole12 = document.getElementById('12')
let hole13 = document.getElementById('13')

const changeColor = () => {
    if (game.currentPlayer === game.players[0]) {
        let redTiles = document.getElementsByClassName("player1");
        for (let element of redTiles) {
            element.classList.add("bg-danger", "text-white");
        }
        let whiteTiles = document.getElementsByClassName("player2");
        for (let element of whiteTiles) {
            element.classList.remove("bg-danger", "text-white");

        }
    }

    if (game.currentPlayer === game.players[1]) {
        let redTiles = document.getElementsByClassName("player2");
        for (let element of redTiles) {
            element.classList.add("bg-danger", "text-white");
        }
        let whiteTiles = document.getElementsByClassName("player1");
        for (let element of whiteTiles) {
            element.classList.remove("bg-danger", "text-white");

        }
    }
}

let changeBoard = () => {
    hole0.innerText = game.board[0]    
    hole1.innerText = game.board[1]
    hole2.innerText = game.board[2]
    hole3.innerText = game.board[3]
    hole4.innerText = game.board[4]
    hole5.innerText = game.board[5]
    hole6.innerText = game.board[6]
    hole7.innerText = game.board[7]
    hole8.innerText = game.board[8]
    hole9.innerText = game.board[9]
    hole10.innerText = game.board[10]
    hole11.innerText = game.board[11]
    hole12.innerText = game.board[12]
    hole13.innerText = game.board[13]
}

let game = 0

playElement.addEventListener('click', () => {
    game = new mancala
    changeColor()
    changeBoard()
})


document.addEventListener('click', (event) => {
    if (game.currentBoardSide.indexOf(parseInt(event.target.id)) !== -1) {
        game.play(parseInt(event.target.id))
        changeColor()
        changeBoard()
    }



})