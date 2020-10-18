import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => (
	<div className="App">
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<nav>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
			</nav>

			<Switch>
				{/* Different ways of using Route components */}
				<Route exact path="/" render={() => <Home />} />
				<Route path="/about" component={About} />
				<Route path="/contact">
					<Contact email="wantulok.jake@gmail.com" />
				</Route>
			</Switch>

			<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
				Learn React
			</a>
		</header>
	</div>
);

export default App;
