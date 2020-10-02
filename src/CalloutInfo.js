import React from 'react';

const CalloutInfo = props => (
	<div className="callout-info">
		<h2>{props.header}</h2>
		<p>{props.body}</p>
	</div>
);

export default CalloutInfo;
