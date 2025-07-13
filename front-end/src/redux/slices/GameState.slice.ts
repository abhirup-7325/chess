import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import GameState from '../../utils/GameLogic/GameState';


interface GameStateWrapper {
    gameState: GameState;
};

const initialState: GameStateWrapper = {
    gameState: new GameState(),
};

export const gameStateSlice = createSlice({
    name: 'gameState', 
    initialState, 
    reducers: {
        resetGame: (state, action: PayloadAction<GameState>) => {
            state.gameState = action.payload;
        },

        updateGameState: (state, action: PayloadAction<GameState>) => {
            state.gameState = action.payload;
        },
    }
});


export const { resetGame, updateGameState } = gameStateSlice.actions;
export default gameStateSlice.reducer;
export type { GameStateWrapper };