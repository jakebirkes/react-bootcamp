import React, { createContext, useReducer } from 'react';
import { ScoreReducer } from './ScoreReducer';

export const ScoreContext = createContext();

const initialState = {
	text: '',
	wordCount: 0,
	prevCount: 0,
};

const ScoreContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(ScoreReducer, initialState);

	const storeText = payload => dispatch({ type: 'STORE_TEXT', payload });

	const storeCount = payload => dispatch({ type: 'STORE_COUNT', payload });

	const contextValues = {
		storeText,
		storeCount,
		...state,
	};
	return <ScoreContext.Provider value={contextValues}>{children}</ScoreContext.Provider>;
};

export default ScoreContextProvider;
