import { useSelector } from 'react-redux';
import { type RootState } from '../redux/store.ts';

export default function Board() {
    const gameStateWrapper = useSelector((state: RootState) => state.gameState);
    const gameState = gameStateWrapper.gameState;

    console.log(gameState);
    const squareSize = 60;
    const rows = 8;
    const cols = 8;

    const squares = [];

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const isDark = (row + col) % 2 === 1;
            squares.push(
                <div
                    key={`${row}-${col}`}
                    className={`flex items-center justify-center text-sm font-semibold ${
                    isDark ? 'bg-[#b18a6a] text-white' : 'bg-[#eeeed2] text-black'
                    }`}
                >

                    {
                        gameState.board[row][col] !== "--" && (
                        <img src={`../pieces/${gameState.board[row][col]}.png`} height={squareSize} alt={`${gameState.board[row][col]}`}/>
                        )
                    }

                </div>
            );
        }
    }

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
        </div>
    );
}