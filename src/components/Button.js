import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

const Button = () => {
	const { toggleTheme, darkTheme } = useContext(AppContext);
	return (
		<button className={darkTheme ? 'dark-theme' : 'light-theme'} onClick={() => toggleTheme()}>
			Switch Theme
		</button>
	);
};

export default Button;
