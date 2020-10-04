import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

const Header = () => {
	const { darkTheme } = useContext(AppContext);
	return (
		<header className={darkTheme ? 'dark-theme' : 'light-theme'}>
			<h2>Light Theme</h2>
		</header>
	);
};

export default Header;
