import React, { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';

export const AppContext = createContext();

const initialState = {
	darkTheme: false,
	username: null,
};

const AppContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	const toggleTheme = () => dispatch({ type: 'TOGGLE_THEME' });

	const addUsername = str => dispatch({ type: 'ADD_USERNAME', payload: str });

	const contextValues = {
		toggleTheme,
		addUsername,
		...state,
	};
	return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
