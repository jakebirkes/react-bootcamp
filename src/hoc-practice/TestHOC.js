import React from 'react';

const testHOC = props => (
	<>
		<h1>
			<span aria-label="emoji" role="img">
				👋
			</span>
		</h1>
		<h2>
			<span aria-label="emoji" role="img">
				{props.extraProp || '🤪'}
			</span>
		</h2>
		<div>{props.children || <p>Using a pointless HOC</p>}</div>
	</>
);

export default testHOC;
