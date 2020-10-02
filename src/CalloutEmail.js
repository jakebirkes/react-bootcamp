import React from 'react';

const CalloutEmail = props => (
	<div className="callout-email">
		<h2>{props.header}</h2>
		<input type="email" placeholder="Enter Email" />
		<button>{props.btnText}</button>
	</div>
);

export default CalloutEmail;
