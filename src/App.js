import React, { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import './App.css';
import ExampleUseEffect from './components/ExampleUseEffect';
import ExampleUseState from './components/ExampleUseState';
import ExampleUseRef from './components/ExampleUseRef';
import SpeedTypingGame from './components/speedtyping/SpeedTypingGame';
import ExampleUseContext from './components/ExampleUseContext';

const App = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<div className={'App ' + theme}>
			<h1>React Hooks</h1>
			<ExampleUseContext />
			<ExampleUseState />
			<ExampleUseEffect />
			<ExampleUseRef />
			<SpeedTypingGame />
		</div>
	);
};

export default App;
