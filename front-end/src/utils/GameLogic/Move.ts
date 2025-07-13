class Move {
    startSquare: [number, number];
    endSquare: [number, number];
    pieceMoved: string;
    pieceCaptured: string;

    constructor(startSquare: [number, number], endSquare: [number, number], board: string[][]) {
        this.startSquare = startSquare;
        this.endSquare = endSquare;
        this.pieceMoved = board[startSquare[0]][startSquare[1]];
        this.pieceCaptured = board[endSquare[0]][endSquare[1]];
    }
}

export default Move;