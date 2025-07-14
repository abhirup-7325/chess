import { useSelector, useDispatch } from 'react-redux';
import { type RootState } from '../redux/store.ts';
import { squareSize, rows, cols, lightSquaresColor, darkSquaresColor } from '../utils/constants.ts';
import Move from '../utils/GameLogic/Move.ts';
import { useState } from 'react';
import { updateGameState } from '../redux/slices/GameState.slice';

export default function Board() {
    const gameStateWrapper = useSelector((state: RootState) => state.gameState);
    const gameState = gameStateWrapper.gameState;

    console.log(lightSquaresColor)
    console.log(gameState);


    const squares = [];

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const isDark = (row + col) % 2 === 1;
            squares.push(
                <div
                    key={`${row}-${col}`}
                    onClick={() => handleSquareClick(row, col)}
                    className={`flex items-center justify-center text-sm font-semibold ${
                    isDark ? 'text-white' : 'text-black'
                    }`}
                    style={{
                    width: `${squareSize}px`,
                    height: `${squareSize}px`,
                    backgroundColor: isDark ? darkSquaresColor : lightSquaresColor,
                    }}
                >

                    {
                        gameState.board[row][col] !== "--" && (
                        <img src={`../pieces/${gameState.board[row][col]}.png`} height={squareSize} width={squareSize}/>
                        )
                    }

                </div>
            );
        }
    }


    const dispatch = useDispatch();
    const [selectedSquare, setSelectedSquare] = useState<[number, number] | null>(null);

    const handleSquareClick = (row: number, col: number) => {
        if (!selectedSquare) {
            if (gameState.board[row][col] !== '--') {
            setSelectedSquare([row, col]);
            }
        } else {
            const move = new Move(selectedSquare, [row, col], gameState.board);
            gameState.makeMove(move);
            dispatch(updateGameState(gameState));
            setSelectedSquare(null);
        }
    };

    const handleUndoMove = () => {
        gameState.undoMove();
        dispatch(updateGameState(gameState));
        setSelectedSquare(null);
        console.log(gameState.board);
    };

    const [isChangingCounter, setIsChangingCounter] = useState(0);

    return (
        <div className="flex items-center justify-center">
            <div
            className="grid"
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${cols}, ${squareSize}px)`,
                gridTemplateRows: `repeat(${rows}, ${squareSize}px)`,
                width: `${cols * squareSize}px`,
                height: `${rows * squareSize}px`,
            }}
            >
            {squares}
            </div>

            <button onClick={() => { handleUndoMove(); setIsChangingCounter((isChangingCounter + 1) % (1e9 + 7)); } }>Undo</button>
        </div>
    );
}