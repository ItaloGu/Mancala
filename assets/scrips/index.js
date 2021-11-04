class mancala {
    constructor() {
        this.board = [0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4]
        this.holes = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13]
        this.players = [{
                name: 'Jogador1',
                oasis: 7,
                score: this.board[7],
                boardSide: [1, 2, 3, 4, 5, 6],
                distribution: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                boardHighlighted: [1, 2, 3, 4, 5, 6, 7]

            },
            {
                name: 'Jogador2',
                oasis: 0,
                score: this.board[0],
                boardSide: [8, 9, 10, 11, 12, 13],
                distribution: [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13],
                boardHighlighted: [8, 9, 10, 11, 12, 13, 0]
            }
        ]
        this.counter = 0
        this.gameCounter = 0
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
        this.resultText = ''
    }

    sumSide() {
        for (let j = 1; j < 7; j++) {
            this.board[7] += this.board[j]
            this.board[j] = 0
        }
        for (let k = 8; k < 14; k++) {
            this.board[0] += this.board[k]
            this.board[k] = 0
        }
    }



    // se não puder fazer mais jogadas o jogo termina OK   
    endGame() {
        for (let i = 0; i < this.holes.length; i++) {

            if (this.board[this.holes[i]] < 2) {
                this.gameCounter++

            }

        }

        if (this.gameCounter === 12) {
            this.sumSide()
            this.points()
            this.gameCounter = 0
            this.gameOver = true;
        } else {
            this.gameCounter = 0
            this.gameOver = false;
        }


    }

    //ao final do jogo quem tiver mais pontos vence OK

    points() {

        if (this.players[0].score > this.players[1].score && this.gameOver === true) {
            this.resultText = `${this.players[0].name}`;
        } else if (this.players[1].score > this.players[0].score && this.gameOver === true) {
            this.resultText = `${this.players[1].name}`;
        } else if (this.gameOver === true && this.players[1].score === this.players[0].score) {
            this.resultText = `É um empate`;
        }
    }

    //se a ultima peça cair em uma casa vasia voce rouba as peças da casa em frente OK   

    robPieces() {
        if (((this.space + this.pieces) % 14) !== 0 && ((this.space + this.pieces) % 14) !== 7) {
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
            this.currentBoardSide = this.currentPlayer.boardSide
            this.currentDistribution = this.currentPlayer.distribution

        }
    }


    // cada jogada OK 

    play(n) {
        if (n !== 0) {
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
            this.players[0].score = this.board[7]
            this.players[1].score = this.board[0]
            this.board[this.space] -= this.pieces;
            this.robPieces()
            this.changePlayer()
            this.endGame()
            this.points()
        }
    }

}