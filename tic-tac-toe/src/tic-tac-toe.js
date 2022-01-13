class TicTacToe {
    constructor() {
        this.player = 'x',
        this.matrix = Array(3).fill().map(()=>Array(3).fill(null));
    }

    getCurrentPlayerSymbol() {
        return this.player;
    }

    nextTurn(rowIndex, colIndex) {
        if (this.matrix[rowIndex][colIndex] != null) {
            return;
        }
        this.matrix[rowIndex][colIndex] = this.getCurrentPlayerSymbol();
        this.player = this.player == 'x' ? 'o' : 'x';
    }

    isFinished() {
        return this.getWinner() != null || this.isDraw();
    }

    getWinner() {
        switch (true) {
            case (this.matrix[0][0] == this.matrix[0][1] && this.matrix[0][0] == this.matrix[0][2]) : return this.matrix[0][0];
            case (this.matrix[1][0] == this.matrix[1][1] && this.matrix[1][0] == this.matrix[1][2]) : return this.matrix[1][0];
            case (this.matrix[2][0] == this.matrix[2][1] && this.matrix[2][0] == this.matrix[2][2]) : return this.matrix[2][0];
            case (this.matrix[0][0] == this.matrix[1][0] && this.matrix[0][0] == this.matrix[2][0]) : return this.matrix[0][0];
            case (this.matrix[0][1] == this.matrix[1][1] && this.matrix[0][1] == this.matrix[2][1]) : return this.matrix[0][1];
            case (this.matrix[0][2] == this.matrix[1][2] && this.matrix[0][2] == this.matrix[2][2]) : return this.matrix[0][2];
            case (this.matrix[0][0] == this.matrix[1][1] && this.matrix[0][0] == this.matrix[2][2]) : return this.matrix[0][0];
            case (this.matrix[0][2] == this.matrix[1][1] && this.matrix[0][2] == this.matrix[2][0]) : return this.matrix[0][2];
            default: return null;
        }
    }

    noMoreTurns() {
        return this.matrix.every(el => el.indexOf(null) == -1);
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner() == null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;