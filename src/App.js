import React from 'react';
import './App.css';
import ExampleUseEffect from './components/ExampleUseEffect';
import ExampleUseState from './components/ExampleUseState';

const App = () => (
	<div className="App">
		<h1>React Hooks</h1>
		<ExampleUseState />
		<ExampleUseEffect />
	</div>
);

export default App;
