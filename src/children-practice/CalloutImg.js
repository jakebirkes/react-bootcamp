import React from 'react';

const CalloutImg = props => (
	<div className="callout-img">
		<img alt={props.caption} src={props.img} width="100%" />
		<figcaption>{props.caption}</figcaption>
	</div>
);

export default CalloutImg;
