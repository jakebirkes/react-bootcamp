import React, { memo } from 'react';
import Parent from './Parent';

const GrandParent = () => {
	console.log('[👴🏼]   [ ]   [ ]   [ ] rendered');
	return (
		<div>
			<p>I'm a GrandParent Component</p>
			<Parent />
			<Parent />
		</div>
	);
};

export default memo(GrandParent);
