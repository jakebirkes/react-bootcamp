import React from 'react';
import Header from './components/Header';
import Button from './components/Button';
import AppContextProvider from './contexts/AppContext';
import './App.css';
import Username from './components/Username';

const App = () => (
	<AppContextProvider>
		<div className="App">
			<Header />
			<Username />
			<Button />
		</div>
	</AppContextProvider>
);

export default App;
