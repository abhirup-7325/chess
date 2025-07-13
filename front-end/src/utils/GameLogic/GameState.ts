import { ORIGINAL_BOARD } from "./constants";

class GameState {
    board: string[][];
    whiteToMove: boolean;
    gameOver: boolean;
    winner: string | null;

    constructor(startingPosition: string[][] = ORIGINAL_BOARD) {
        this.board = startingPosition;
        this.whiteToMove = true;
        this.gameOver = false;
        this.winner = null;
    }
}


export { GameState as GameState };