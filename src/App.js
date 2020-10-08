import React from 'react';
import './App.css';
import ExampleUseEffect from './components/ExampleUseEffect';
import ExampleUseState from './components/ExampleUseState';
import SpeedTypingGame from './components/speedtyping/SpeedTypingGame';

const App = () => (
	<div className="App">
		<h1>React Hooks</h1>
		<ExampleUseState />
		<ExampleUseEffect />
		<SpeedTypingGame />
	</div>
);

export default App;
