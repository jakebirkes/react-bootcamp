import React, { useState, useEffect } from 'react';
import randomcolor from 'randomcolor';

const ExampleUseEffect = () => {
	const [count, setCount] = useState(0);
	const [color, setColor] = useState('');

	const increment = () => setCount(prevCount => prevCount + 1);
	const decrement = () => setCount(prevCount => prevCount - 1);

	useEffect(() => setColor(randomcolor()), [count]); // without state, will trigger at every render

	useEffect(() => {
		const counterInterval = setInterval(() => {
			const counter = document.getElementById('counter');
			counter.textContent = +counter.textContent + 1;
		}, 1000);
		return () => clearInterval(counterInterval); // cleanup interval
	}, []); // without state, will trigger at every render

	return (
		<div className="hook-example">
			<h2>
				<code>useEffect()</code>
			</h2>
			<h3 style={{ color: color }}>{count}</h3>
			<p>
				Getting a random color with count with <code>useEffect()</code>
			</p>
			<p>
				<button onClick={increment}>Increment</button>
			</p>
			<p>
				<button onClick={decrement}>Decrement</button>
			</p>
			<h3 id="counter">0</h3>
			<p>
				Counting up with <code>useEffect()</code>
			</p>
		</div>
	);
};

export default ExampleUseEffect;
