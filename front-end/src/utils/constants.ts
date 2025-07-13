const ORIGNAL_BOARD: string[][] = [
    ["bR", "bN", "bB", "bQ", "bK", "bB", "bN", "bR"],
    ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
    ["--", "--", "--", "--", "--", "--", "--", "--"],
    ["--", "--", "--", "--", "--", "--", "--", "--"],
    ["--", "--", "--", "--", "--", "--", "--", "--"],
    ["--", "--", "--", "--", "--", "--", "--", "--"],
    ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
    ["wR", "wN", "wB", "wQ", "wK", "wB", "wN", "wR"],
];

const squareSize = 80;
const rows = 8;
const cols = 8;
const lightSquaresColor = "#eeeed2";
const darkSquaresColor = "#b18a6a";

export { ORIGNAL_BOARD as ORIGINAL_BOARD, 
    squareSize as squareSize, 
    rows as rows, 
    cols as cols,
    lightSquaresColor as lightSquaresColor,
    darkSquaresColor as darkSquaresColor 
};