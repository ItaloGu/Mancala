class mancala {
    constructor() {
        this.board = [0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4]
        this.holes = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13]
        this.players = [{
                name: 'player1',
                oasis: 7,
                score: this.board[7],
                boardSide: [1, 2, 3, 4, 5, 6],
                distribution: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                boardHighlighted: [1, 2, 3, 4, 5, 6, 7]

            },
            {
                name: 'player2',
                oasis: 0,
                score: this.board[0],
                boardSide: [8, 9, 10, 11, 12, 13],
                distribution: [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13],
                boardHighlighted: [8, 9, 10, 11, 12, 13, 0]
            }
        ]
        this.counter = 0
        this.space = 20
        this.currentPlayer = this.players[0]
        this.otherPlayer = this.players[1]

        this.pieces = this.board[this.space]
        this.gameOver = false;
        this.currentOasis = this.currentPlayer.oasis
        this.otherOasis = this.otherPlayer.oasis
        this.currentBoardSide = this.currentPlayer.boardSide
        this.otherBoardSide = this.otherPlayer.boardSide
        this.currentDistribution = this.currentPlayer.distribution
        this.currentBoardHighlighted = this.currentPlayer.boardHighlighted
    }





    // se não puder fazer mais jogadas o jogo termina OK   
    endGame() {
        for (let i = 0; i < this.holes.length; i++) {

            if (this.board[this.holes[i]] < 1) {
                this.gameCounter++

            }
        }
        if (this.gameCounter === 12) {
            this.gameOver = true
        }
        this.counter = 0
    }

    //ao final do jogo quem tiver mais pontos vence OK

    points() {
        if (this.players[0].score > this.players[1].score && this.gameOver === true) {
            return `${this.players[0].name} Won!`;
        } else if (this.players[1].score > this.players[0].score && this.gameOver === true) {
            return `${this.players[1].name} Won!`;
        } else if (this.gameOver === true) {
            return `It's a tie!`
        }
    }

    //se a ultima peça cair em uma casa vasia voce rouba as peças da casa em frente OK   

    robPieces() {
        if(((this.space + this.pieces) % 14) !== 0 && ((this.space + this.pieces) % 14) !== 7){
            if ((this.board[(this.space + this.pieces) % 14]) === 1 && this.board[(14 - ((this.space + this.pieces) % 14))] !== 0) {
                this.board[this.currentOasis] += (this.board[(14 - ((this.space + this.pieces) % 14))] + 1)
                this.board[(14 - ((this.space + this.pieces) % 14))] = 0
                this.board[(this.space + this.pieces) % 14] = 0
            }
        }
    }

    //um jogador por rodada OK

    changePlayer() {
        if (((this.space + this.pieces) % 14) !== this.currentOasis) {
            if (this.currentPlayer === this.players[0]) {
                this.currentPlayer = this.players[1]
                this.otherPlayer = this.players[0]
            } else {
                this.currentPlayer = this.players[0]
                this.otherPlayer = this.players[1]
            }
            this.currentOasis = this.currentPlayer.oasis
            this.otherOasis = this.otherPlayer.oasis

        }
    }


    // cada jogada OK 

    play(n) {
        this.space = n
        this.pieces = this.board[this.space]
        this.counter = this.pieces
        for (let i = 0; i < this.pieces; i++) {
            if (this.currentDistribution.indexOf((this.space + 1 + i) % 14) === -1) {
                this.counter++
            }
        }
        for (let j = 0; j < this.counter; j++) {

            if (this.currentDistribution.indexOf((this.space + 1 + j) % 14) !== -1) {
                this.board[(this.space + 1 + j) % 14]++
            }
        }


        this.board[this.space] -= this.pieces;
        this.robPieces()
        this.changePlayer()
        this.currentBoardSide = this.currentPlayer.boardSide
        this.currentDistribution = this.currentPlayer.distribution
        this.endGame()
        this.points()
    }

}