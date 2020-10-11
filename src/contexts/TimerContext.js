import React, { createContext, useReducer } from 'react';
import { TimerReducer } from './TimerReducer';

export const TimerContext = createContext();

const initialState = {
	start: false,
	time: 60,
};

const TimerContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(TimerReducer, initialState);

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
	return <TimerContext.Provider value={contextValues}>{children}</TimerContext.Provider>;
};

export default TimerContextProvider;
