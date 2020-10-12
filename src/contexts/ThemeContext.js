import React, { createContext, useReducer } from 'react';

export const ThemeContext = createContext();

const initialState = {
	theme: 'light',
};

const ThemeReducer = (state, action) => {
	switch (action.type) {
		case 'TOGGLE':
			const str = state.theme === 'light' ? 'dark' : 'light';
			return {
				...state,
				theme: str,
			};
		default:
			console.error('ThemeReducer: INVALID ACTION', action.type);
	}
};

const ThemeContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(ThemeReducer, initialState);

	const toggleTheme = () => dispatch({ type: 'TOGGLE' });

	const contextValues = {
		toggleTheme,
		...state,
	};
	return <ThemeContext.Provider value={contextValues}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
