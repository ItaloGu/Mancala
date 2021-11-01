class mancala {
    constructor(name, oasis) {
        this.players = [{
                name: player1,
                oasis: 0,
                score: this.board[0],

            },
            {
                name: player2,
                oasis: 7,
                score: this.board[7],

            }
        ]
        this.board = [0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4]
        this.pieces = this.board[space]
        this.gameOver = false;
        this.currentOasis = currnetPlayer.oasis
        this.otherOasis = otherPlayer.oasis
        rhis.currnetPlayer = players[0]
        this.otherPlayer = players[1]

    }


    //se a ultima peça cair no seu oasis jogue novamente

    rePlay(i, currentOasis, space) {
        if (this.board[(space + this.pieces) % 14] === this.board[currentOasis]) {
            play()
        }
    }

    // se não puder fazer mais jogadas o jogo termina    

    endGame(gameOver, board) {
        for (let i = 1; i < 14; i++) {
            if ((this.board[i] && !this.board[7]) < 2) {
                for (let j = 1; i < 7; j++) {
                    board[0] += board[j]
                    board[j] = 0
                }
                for (let k = 8; i < 14; k++) {
                    board[0] += board[k]
                    board[k] = 0
                }
                gameOver = true;
            }
        }
    }

    //ao final do jogo quem tiver mais pontos vence

    points(players) {
        if (players[0].score > players[1].score && this.gameOver === true) {
            return `${players[0]} Won!`;
        } else if (players[1].score > players[0].score && this.gameOver === true) {
            return `${players[1]} Won!`;
        } else {
            return `It's a tie!`
        }
    }

    //se a ultima peça cair em uma casa vasia voce rouba as peças da casa em frente   

    robPieces() {
        if ((this.board[(space + pieces) % 14]) === 1) {
            this.board[currentOasis] += (this.board[(14 - ((space + pieces) % 14))] + 1)
            this.board[(14 - ((space + pieces) % 14))] = 0
        }
    }

    //um jogador por rodada

    changePlayer(players) {

        if (currnetPlayer === players[0]) {
            currentPlayer = players[1]
            otherPlayer = players[0]
        } else {
            currnetPlayer = players[0]
            otherPlayer = players[1]
        }
        this.currentOasis = currnetPlayer.oasis
        this.otherOasis = otherPlayer.oasis

    }

    // cada jogada    

    play(space) {
        this.pieces = this.board[space]
        for (let i = 0; i < this.pieces; i++) {
            if (this.board[(space + 1 + i) % 14] === this.board[otherOasis]) {
                this.board[(space + 1 + pieces) % 14]++
            } else {
                this.board[(space + 1 + i) % 14]++
            }
        }
        this.board[space] = 0;
        rePlay()
        robPieces()
        endGame()
        points()
        changePlayer()
    }
}