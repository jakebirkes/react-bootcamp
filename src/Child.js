import React from 'react';
import GrandChild from './GrandChild';

const Child = () => {
	console.log('[ ]   [ ]   [🧒🏻]   [ ] rendered');
	return (
		<div>
			<p>I'm a Child Component</p>
			<GrandChild />
			<GrandChild />
		</div>
	);
};

export default Child;
