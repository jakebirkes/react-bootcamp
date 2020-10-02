import React from 'react';

export const withExtraPropAdded = Component => props => (
	<Component extraProp="👌" {...props}>
		<p>Extra prop added</p>
	</Component>
);
