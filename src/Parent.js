import React, { memo } from 'react';
import Child from './Child';

export default memo(function Parent() {
	console.log('[ ]   [👩🏼‍⚕️]   [ ]   [ ] rendered');
	return (
		<div>
			<p>I'm a Parent Component</p>
			<Child />
			<Child />
		</div>
	);
});
