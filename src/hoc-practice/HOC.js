import React from 'react';

export const withPointlessHOC = Component => props => <Component {...props} />;

export const withLoader = Component => ({ isLoading, ...props }) =>
	!isLoading ? (
		<Component {...props} />
	) : (
		<Component {...props}>
			<p>
				<span role="img" aria-label="fetching">
					Fetching 🐕...
				</span>
			</p>
		</Component>
	);

export const withExtraPropAdded = (Component, faveNum = null) => props => (
	<Component extraProp="👌" {...props}>
		<p>Extra prop added</p>
		<p hidden={!faveNum}>
			Your favorite number is <span>{faveNum}</span>
		</p>
	</Component>
);
