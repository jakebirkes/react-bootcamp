import React, { createContext, useReducer } from 'react';
import { SpeedTypingReducer } from './SpeedTypingReducer';

export const SpeedTypingContext = createContext();

const initialState = {
	start: false,
	timeRemaining: null,
	text: null,
};

const SpeedTypingContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(SpeedTypingReducer, initialState);

	const startGame = () => dispatch({ type: 'START_GAME' });

	const endGame = () => dispatch({ type: 'START_GAME' });

	const storeText = payload => dispatch({ type: 'STORE_TEXT', payload });

	const countDown = () => dispatch({ type: 'COUNT_DOWN' });

	const contextValues = {
		startGame,
		endGame,
		storeText,
		countDown,
		...state,
	};
	return (
		<SpeedTypingContext.Provider value={contextValues}>{children}</SpeedTypingContext.Provider>
	);
};

export default SpeedTypingContextProvider;
