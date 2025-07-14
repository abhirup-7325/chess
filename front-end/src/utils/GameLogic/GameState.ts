import { ORIGINAL_BOARD } from "../constants";
import Move from "./Move";

class GameState {
    board: string[][];
    whiteToMove: boolean;
    gameOver: boolean;
    winner: string | null;
    moveLog: Move[];

    constructor(startingPosition: string[][] = ORIGINAL_BOARD) {
        this.board = startingPosition;
        this.whiteToMove = true;
        this.gameOver = false;
        this.winner = null;
        this.moveLog = [];
    }

    clone(): GameState {
    const copy = new GameState(this.board.map(row => [...row]));
    copy.whiteToMove = this.whiteToMove;
    copy.gameOver = this.gameOver;
    copy.winner = this.winner;
    copy.moveLog = [...this.moveLog];
    return copy;
}

    makeMove(move: Move): void {
        this.board[move.startSquare[0]][move.startSquare[1]] = "--";
        this.board[move.endSquare[0]][move.endSquare[1]] = move.pieceMoved;
        this.moveLog.push(move);
        this.whiteToMove = !this.whiteToMove;
    }

    undoMove(): void {
        if (this.moveLog.length > 0) {
            const move = this.moveLog.pop()!;
            this.board[move.startSquare[0]][move.startSquare[1]] = move.pieceMoved;
            this.board[move.endSquare[0]][move.endSquare[1]] = move.pieceCaptured;
            this.whiteToMove = !this.whiteToMove;
        }
    }
}

export default GameState;