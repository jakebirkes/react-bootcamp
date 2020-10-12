import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ExampleUseContext = () => {
	const { toggleTheme } = useContext(ThemeContext);
	return (
		<div className="hook-example">
			<h2>
				<code>useContext()</code>
			</h2>
			<button onClick={() => toggleTheme()}>Toggle Theme</button>
		</div>
	);
};

export default ExampleUseContext;
