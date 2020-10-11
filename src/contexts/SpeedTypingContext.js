import React, { createContext, useReducer } from 'react';
import { SpeedTypingReducer } from './SpeedTypingReducer';

export const SpeedTypingContext = createContext();

const initialState = {
	start: false,
	text: null,
	time: 60,
};

const SpeedTypingContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(SpeedTypingReducer, initialState);

	const startGame = () => dispatch({ type: 'START_GAME' });

	const endGame = () => dispatch({ type: 'START_GAME' });

	const storeText = payload => dispatch({ type: 'STORE_TEXT', payload });

	const keepTime = payload => dispatch({ type: 'KEEP_TIME', payload });

	const contextValues = {
		startGame,
		endGame,
		storeText,
		keepTime,
		...state,
	};
	return (
		<SpeedTypingContext.Provider value={contextValues}>{children}</SpeedTypingContext.Provider>
	);
};

export default SpeedTypingContextProvider;
