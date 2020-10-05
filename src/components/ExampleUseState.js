import React, { useState } from 'react';

const ExampleUseState = () => {
	const [state, toggleState] = useState(false);

	const [count, setCount] = useState(0);

	const increment = () => setCount(prevCount => prevCount + 1);

	const decrement = () => setCount(prevCount => prevCount - 1);

	return (
		<div className="hook-example">
			<h2>
				<code>useState()</code>
			</h2>
			<p>
				State: <span>{state ? 'true' : 'false'}</span>
			</p>
			<button onClick={() => toggleState(prevState => (prevState = !state))}>
				Toggle with <code>useState</code>
			</button>

			<p>
				Count: <strong>{count}</strong>
			</p>
			<button onClick={() => increment()}>
				Increment with <code>useState</code>
			</button>
			<button onClick={() => decrement()}>
				Decrement with <code>useState</code>
			</button>
		</div>
	);
};

export default ExampleUseState;
